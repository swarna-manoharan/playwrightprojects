require('dotenv').config();
const { test, expect } = require('@playwright/test');

const baseURL = 'https://eventhub.rahulshettyacademy.com';
const city = 'Bangalore';
const testVenue = 'Check Test Venue';
const ticketBuyerName = 'Arun';
const ticketBuyerEmail = 'aaaa@gmail.com';
const ticketBuyerPhone = '1234567890';

async function loginHelp(page) {

    await page.goto(baseURL + '/login');
    await page.getByPlaceholder('you@email.com').fill(process.env.EVENTHUB_EMAIL);
    await page.locator('#password').fill(process.env.EVENTHUB_PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Browse Events →')).toBeVisible();
}

function venueDate() {

    const today = new Date();
    const futureDate = new Date(today);

    futureDate.setDate(today.getDate() + 7);

    return futureDate.toISOString().slice(0, 16);
}

async function createEvent(page) {

    const myeventTitle = `testEvent ${Date.now()}`;

    await page.goto(baseURL + '/admin/events');

    await page.getByTestId('event-title-input').fill(myeventTitle);
    await page.locator('#category').selectOption({ index: 1 });
    await page.locator('#city').fill(city);
    await page.locator('#venue').fill(testVenue);
    await page.locator('#event-date-\\&-time').fill(venueDate());
    await page.getByPlaceholder('0.00').fill('100');
    await page.locator('#total-seats').fill('100');

    await page.getByTestId('add-event-btn').click();

    await expect(page.getByText('Event created!')).toBeVisible();

    return myeventTitle;
}

async function mybooking(page, myeventTitle) {

    await page.goto(baseURL + '/events');

    const myCarddetails = page
        .locator('[data-testid="event-card"]')
        .filter({ hasText: myeventTitle });

    const seatText = await myCarddetails
        .getByText('seats available')
        .textContent();

    const seatsBeforeBooking = parseInt(seatText.match(/\d+/)[0]);

    console.log('Seats before booking:', seatsBeforeBooking);

    await myCarddetails.getByTestId('book-now-btn').click();

    await expect(page.locator('#ticket-count')).toHaveText('1');

    await page.getByLabel('Full Name').fill(ticketBuyerName);
    await page.locator('#customer-email').fill(ticketBuyerEmail);
    await page.locator('#phone').fill(ticketBuyerPhone);

    await page.locator('#confirm-booking').click();

    const bookingRef = (await page.locator('.booking-ref').textContent()).trim();

    console.log('Booking Reference:', bookingRef);

    return {
        bookingRef,
        seatsBeforeBooking
    };
}

async function verifyBooking(page, myeventTitle, bookingRef, seatsBeforeBooking) {

    // Verify booking exists
    await page.goto(baseURL + '/bookings');

    const myBooking = page
        .locator('#booking-card')
        .filter({ hasText: bookingRef });

    await expect(myBooking).toBeVisible();
    await expect(myBooking).toContainText(myeventTitle);

    // Verify seat count decreased
    await page.goto(baseURL + '/events');

    const myCarddetails = page
        .locator('[data-testid="event-card"]')
        .filter({ hasText: myeventTitle });

    await expect(myCarddetails).toBeVisible();

    const seatTextAfter = await myCarddetails
        .getByText('seats available')
        .textContent();

    const seatsAfterBooking = parseInt(seatTextAfter.match(/\d+/)[0]);

    console.log('Seats after booking:', seatsAfterBooking);

    expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
}

test('Solo Event Plan', async ({ page }) => {

    await loginHelp(page);

    const myeventTitle = await createEvent(page);

    const {
        bookingRef,
        seatsBeforeBooking
    } = await mybooking(page, myeventTitle);

    await verifyBooking(
        page,
        myeventTitle,
        bookingRef,
        seatsBeforeBooking
    );

});
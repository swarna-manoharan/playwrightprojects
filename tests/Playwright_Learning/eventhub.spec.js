//day1
const { test, expect } = require('@playwright/test');
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';


async function login(page) {           // helper DEFINITION — page is a parameter
    await page.goto(BASE_URL + '/login');
    await page.getByPlaceholder('you@email.com').fill(process.env.EVENTHUB_EMAIL);
    await page.getByLabel('Password').fill(process.env.EVENTHUB_PASSWORD);
    await page.locator('#login-btn').click();
    await expect (page.getByText('Browse Events →')).toBeVisible();
    // ... login steps
}

 function futureDateValue() {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 7);
    return futureDate.toISOString().slice(0, 16); // Returns date in YYYY-MM-DD format
}

async function updateMyEvent(page, eventTitle) {
    await page.goto(BASE_URL + '/events');
    const myCard = page.locator('[data-testid="event-card"]').filter({ hasText: eventTitle });
    await expect(myCard).toBeVisible({ timeout: 5000 });
    const seatText = await myCard.getByText('seats available').textContent();
    const seatsBeforeBooking = parseInt(seatText.match(/(\d+)/)[1]);
    console.log('Seats before:', seatsBeforeBooking);
    await myCard.getByTestId('book-now-btn').click();
    // Step 5 — booking form (using the spec's locators):
await expect(page.locator('#ticket-count')).toHaveText('1');     // assert default quantity
await page.getByLabel('Full Name').fill('Arun Barigiriraj');
await page.locator('#customer-email').fill(process.env.EVENTHUB_EMAIL);
await page.getByPlaceholder('+91 98765 43210').fill('1234567890');
await page.locator('.confirm-booking-btn').click();
// Step 6 — verify booking confirmation (this ASSERTS the booking worked):
const bookingRef = await page.locator('.booking-ref').first().textContent();
console.log('Booking ref:', bookingRef);
await expect(page.locator('.booking-ref').first()).toBeVisible();
    return { seatsBeforeBooking, bookingRef };  
} 


    async function verifyBooking(page, eventTitle, bookingRef) {
    await page.goto(BASE_URL + '/bookings');
    await expect(page).toHaveURL(BASE_URL + '/bookings');
    const myBooking = page.locator('#booking-card').filter({ hasText: bookingRef });
    await expect(myBooking).toBeVisible();
    await expect(myBooking).toContainText(eventTitle);
}
    //const allBooking = page.locator('#booking-card');
    //const allBookingCount = await allBooking.count;                        // AUTO-WAITS for it to appear
    //await expect(myBooking).toContainText(eventTitle);

async function latestseating(page, eventTitle, seatsBeforeBooking) {   // ← receive it
    await page.goto(BASE_URL + '/events');
    const myCard = page.locator('[data-testid="event-card"]').filter({ hasText: eventTitle });
    await expect(myCard).toBeVisible();
    const seatTextAfter = await myCard.getByText('seats available').textContent();
    const seatsAfterBooking = parseInt(seatTextAfter.match(/(\d+)/)[1]);
    console.log('Seats after:', seatsAfterBooking);
    expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);   // now seatsBeforeBooking exists
}

test('create event', async ({ page }) => {
    await login(page);
    await page.goto(BASE_URL + '/admin/events');
    const eventTitle = `Test Event ${Date.now()}`;
    await page.locator('#event-title-input').fill(eventTitle);   // first field
    await page.getByPlaceholder('Describe the event…').fill('This is a test event description.');  
    await page.getByLabel('City').fill('New York');  
    await page.getByLabel('Venue').fill('Test Venue');  
    console.log('Event created successfully:', eventTitle);
    const futureDate = futureDateValue();
    await page.locator('[id="event-date-&-time"]').fill(futureDate);
    await page.getByLabel('Price ($)').fill('100');
await page.getByLabel('Total Seats').fill('50');
await page.locator('#add-event-btn').click();                    // SUBMIT
await expect(page.getByText('Event created!')).toBeVisible();
    const { seatsBeforeBooking, bookingRef } = await updateMyEvent(page, eventTitle);   // destructure
    await verifyBooking(page, eventTitle, bookingRef);
    await latestseating(page, eventTitle, seatsBeforeBooking);
});
import { test, expect } from "@playwright/test";

test("post with static Data", async ({ request }) => {

//request Body
const requestBody = {
    "firstname": "Zuber",
    "lastname": "MA",
    "totalprice": 1000,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "super bowls"
};


//send request

const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestBody})
const responseBody=await response.json();
console.log(responseBody);

// status code assertion
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

//responseBody fields assertion
expect(responseBody).toHaveProperty("bookingid");
expect(responseBody).toHaveProperty("booking");
expect(responseBody).toHaveProperty("booking.additionalneeds")


//responseBody field values match json
 const Booking=await responseBody.booking
 
 expect(Booking).toMatchObject({
    "firstname": "Zuber",
    "lastname": "MA",
    "totalprice": 1000,
    "depositpaid": true
})
 
 expect(Booking.bookingdates).toMatchObject({
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        });
});

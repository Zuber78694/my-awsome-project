import { test, expect } from "@playwright/test";
import fs from "fs";

test("Post with Json file Body data", async ({ request }) => {
  // JSON file path and converting from string to JSON object
  const jsonFile = "tests/testData/postJsonFileData.json"; // replace with actual path
  const requestBody: any = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));

  // send request
  const response = await request.post("/booking", { data: requestBody });
  const responseBody = await response.json();

  console.log(responseBody);

  // Assertions for status code
  expect(response.ok()).toBeTruthy(); // <-- needs () at the end
  expect(response.status()).toBe(200);

  // Assertions for request Body attributes
  expect(responseBody).toHaveProperty("bookingid");
  expect(responseBody).toHaveProperty("booking");

  // Assertions to match object of Json responseBody
   const Booking = await responseBody.booking;
  expect(Booking).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
  });

  expect(Booking.bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout,
  });
});

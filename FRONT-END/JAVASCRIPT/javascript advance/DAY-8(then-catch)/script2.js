let emails = [
  "arjun123@gmail.com",
  "megha.codes@yahoo.com",
  "rahul.dev21@hotmail.com",
  "sana.khan2025@gmail.com",
  "vikas_random@outlook.com",
  "tanya.mehta09@gmail.com",
  "rohit.x7@yahoo.com",
  "priya_art55@gmail.com",
  "sumit.tech88@outlook.com",
  "neha.writer34@gmail.com",
];

function sendEmail(emails) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability < 5) {
        resolve("email sent successfullly");
      } else reject("email not sent");
    }, time * 1000);
  });
}
sendEmail("haider823205@gmail.com");

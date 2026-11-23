self.addEventListener("push", event => {
  let data = {};

  try {
    data = event.data.json();
  } catch (e) {
    data = { title: "School Schedule", body: "Пора проверить расписание!" };
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "School Schedule",
      {
        body: data.body || "Напоминание об уроке",
        icon: "./icon.png"
      }
    )
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("./")
  );
});

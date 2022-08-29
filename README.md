# Angular Progressive Web Application (PWA)

# Add firebase deploy

ng generate service app.service 


# Clean cache with worker
  - Background async: retries them using sync from the service worker.
  - Background sync: Auto update
  - Background fetch: downloads large files, even when the PWA is closed.
  - Web push: sends a message from the server that wakes up the service worker and notifies the user.
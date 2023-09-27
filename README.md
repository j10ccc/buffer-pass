# BufferPass: self-hosted password manager

## Structure

### UserScript

To be compatible with all browsers which supports load UserScript.

The script detect the password input on html document, when you click the input element, with the field filled, a popover  appears and display the random password generated by your scheme.

### Chromium Browser Extension

Benefit from browser apis, it is more powerful to implement form auto filling than the user-script

### PWA

Be same as browser extension, it provides a dashboard to manage all data and host config.

### Server

Run a backend server to handle data storage and some private and sensitive operations.

## Features

- Open apis, you can integrate all services to your workflow.
- Self-hosted, keep more security.
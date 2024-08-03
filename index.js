// Factory function for creating an iPhone1 object
function iPhone1(color, display, camera) {
  // Create an empty object
  const obj = {};

  // Assign properties to the object
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  // Method to simulate dialing
  obj.dial = function () {
    return `tring.. tring...`;
  };

  // Method to simulate sending a message
  obj.sendMessage = function () {
    return `Sending message...`;
  };

  // Method to simulate clicking the camera
  obj.cameraClick = function () {
    return `Camera clicked`;
  };

  // Return the constructed object
  return obj;
}

// Create an instance of iPhone1 with specified properties
const iP = iPhone1("Black", "16 inch", "2mp");
console.log(iP);

// Factory function for creating an iPhone2 object
function iPhone2(color, display, camera, bluetooth) {
  // Create an empty object
  const obj = {};

  // Assign properties to the object
  obj.color = color;
  obj.display = display;
  obj.camera = camera;
  obj.bluetooth = bluetooth;

  // Method to simulate dialing
  obj.dial = function () {
    return `tring.. tring...`;
  };

  // Method to simulate sending a message
  obj.sendMessage = function () {
    return `Sending message...`;
  };

  // Method to simulate clicking the camera
  obj.cameraClick = function () {
    return `Camera clicked`;
  };

  // Method to simulate connecting to Bluetooth
  obj.connectBluetooth = function () {
    return `Bluetooth connected successfully`;
  };

  // Return the constructed object
  return obj;
}

// Create an instance of iPhone2 with specified properties
const iP1 = iPhone2("Blue", "14 inch", "2mp", "5.0");
console.log(iP1);

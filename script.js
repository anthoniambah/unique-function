// This is a simple function that calculates the volume of a cylinder

function cylinderVolumeCalculator(radius, height) {
  const volume = Math.PI * radius * radius * height;
  return volume;
}

console.log(cylinderVolumeCalculator(5, 5));

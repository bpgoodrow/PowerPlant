import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

// This function stores our state.

const storePlant = () => {
  let currentPlant = {};
  return (plantChangeFunction = state => state) => {
    const newPlant = plantChangeFunction(currentPlant);
    currentPlant = {...newPlant};
    return newPlant;
  };
};

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const plantControl = storePlant();
const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changePlant = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

const plant = changePlant("plant")(1);

const food = changeState("soil")(5);

const hydrate = changeState("water")(5);

const lightRay = changeState("light")(5);



$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  // $('#newPlant').on("click", function(){
  //   const newPlant = plantControl();
  //   $('').append(`<button class="btn-success" id="plant${}">Plant #${}</button>`);
  // });

  $('#newPlant').click(function() {
    const newPlant = plantControl(plant);
    $('#plant-value').text(`Plant: ${newPlant.plant}`);
  });

  $('#feed').click(function() {
    const newState = stateControl(food);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(lightRay);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    const currentPlant = plantControl();
    $('#plant-value').text(`Soil: ${currentPlant.plant}`);
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });
  $('#show-plant').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentPlant = plantControl();
    $('#plant-value').text(`Plant: ${currentPlant.plant}`);
  });
});
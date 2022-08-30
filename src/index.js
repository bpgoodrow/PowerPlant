import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import {  stateControl, stateControl1, food, hydrate, lightRay, dietCoke, cokeZero } from './plant.js';

$(document).ready(function() {

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

  $('#cokeZero').click(function() {
    const newState = stateControl(cokeZero);
    $('#cokeZero-value').text(`Coke: ${newState.cokeZero}`);
  });

  $('#feed1').click(function() {
    const newState1 = stateControl1(food);
    $('#soil-value1').text(`Soil: ${newState1.soil}`);
  });

  $('#water1').click(function() {
    const newState1 = stateControl1(hydrate);
    $('#water-value1').text(`Water: ${newState1.water}`);
  });

  $('#light1').click(function() {
    const newState1 = stateControl1(lightRay);
    $('#light-value1').text(`Light: ${newState1.light}`);
  });

  $(`#dietCoke1`).click(function() {
    const newState1 = stateControl1(dietCoke);
    $('#dietCoke-value1').text(`DietCoke: ${newState1.dietCoke}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
    $('#cokeZero-value').text(`Coke: ${currentState.cokeZero}`);
  });

  $('#show-state1').click(function() {
    const currentState1 = stateControl1();
    $('#soil-value1').text(`Soil: ${currentState1.soil}`);
    $('#water-value1').text(`Water: ${currentState1.water}`);
    $('#light-value1').text(`Light: ${currentState1.light}`);
    $('#dietCoke-value1').text(`DietCoke: ${currentState1.dietCoke}`);
  });
});
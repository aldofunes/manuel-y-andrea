// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Manuel y Andrea',
  DESCRIPTION: 'Sitio web para la boda de Manuel y Andrea',
  AUTHOR: 'Aldo Funes - Beaming Technologies'
};

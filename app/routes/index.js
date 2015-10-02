import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
actions: {
  save3(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
  }

}

});
/*
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      // Some code for processing the update parameters for the rental
      rental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});*/

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      debugger;
      newAnswer.save().then(function() {
        return question.save();
      });
    //  this.transitionTo(('question', params.question);
    },
  }

});

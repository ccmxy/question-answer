import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        inquiry: this.get('upInquiry'),
      };
      debugger;
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
      question.save();
      this.set('updateQuestionForm', false);
      this.transitionTo('index');

      //this.sendAction('update', question, params);
    }
  }
});

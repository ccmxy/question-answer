import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        inquiry: this.get('inquiry')? this.get('inquiry') : question.inquiry.value,
        notes: this.get('notes')? this.get('notes') : question.notes.value,
        author: this.get('author') ? this.get('author') : question.author.value,
      };
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

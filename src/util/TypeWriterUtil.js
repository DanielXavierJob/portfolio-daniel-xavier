export class TypewriterUtil{
  nextStep = this.type
  
  options = {
    texts: [''],
    element: null,
    typingSpeed: 200,
    deletingSpeed: 100,
    waitDurationBeforeDeleting: 2000
  };

  state = {
    currentText: '',
    index: 0,
    isDeleting: false,
    timeoutDuration: 200
  };

  constructor(options){    
    if(!('texts' in options) || !('element' in options)){
      console.error('Please provide a texts string array and a parent HTML element in options');
      return;
    }

    this.options = {
      ...this.options,
      ...options
    };

    this.state = {
      ...this.state,
      timeoutSpeed: options?.typingSpeed ?? 200
    }
  }

  type(text) {
    this.state.currentText = text.substring(0, this.state.currentText.length + 1);
    this.determineNextStep(text)
  }

  delete(text){
    this.state.currentText = text.substring(0, this.state.currentText.length - 1);
    this.determineNextStep(text)
  }

  determineNextStep(text){
    // Currently typing and just finished typing the full text
    // Begin deleting after waiting the waitDurationBeforeDeleting
    if(!this.state.isDeleting && this.state.currentText === text) {
      this.state.timeoutDuration = this.options.waitDurationBeforeDeleting;
      this.state.isDeleting = true;
      this.nextStep = this.delete
    } 
    // Currently deleting and just finished deleting the full text
    // Begin typing the next text
    else if(this.state.isDeleting && this.state.currentText === '') {
      this.state.timeoutDuration  = this.options.typingSpeed;
      this.state.isDeleting = false;
      this.state.index++
      this.nextStep = this.type
    } 
    // Currently deleting and have not finished deleting the full text
    // Continue deleting
    else if(this.state.isDeleting){
      this.state.timeoutDuration  = this.options.deletingSpeed;
      this.nextStep = this.delete
    }
    // Currently typing and have not finished typing the full text
    // Continue typing
    else if(!this.state.isDeleting){
      this.state.timeoutDuration  = this.options.typingSpeed;
      this.nextStep = this.type
    }
  }

  start(){
    const currentWordIndex = this.state.index % this.options.texts.length;
    const text = this.options.texts[currentWordIndex];
    
    
    this.nextStep(text)

    this.options.element.innerHTML = this.state.currentText;

    setTimeout(() => this.start(), this.state.timeoutDuration)
  }
  
}

class ReactSpeech {
    constructor(answersQuestions) {

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        // initialising of recognition
        this.recognition = new SpeechRecognition();
        // initialising of speech
        this.speech = new SpeechSynthesisUtterance();
        // result of recognition
        this.transcript = null;
        // Answers & questions
        this.answersQuestions = answersQuestions;
    }

    startApi(callback) {
        // Starting talk
        this.recognition.onstart = () => {
            this.speakMessage('You can talk');
            console.log('start of talking');
            if (callback) callback();
        };

        // End of conversation
        this.recognition.onspeechend = () => {
            if (callback) callback();
            console.log('end of talking');
        }

        // Result of talk
        this.recognition.onresult = (event) => {
            const current = event.resultIndex;
            this.transcript = event.results[current][0].transcript;
            this.findingAnswer(this.transcript);
        }

        this.speech.onstart = () => {
            console.log('Speach is started');
        }

        // End of answer
        this.speech.onend = () => {
            console.log('Speach is end');
        }
    }

    startSpeek = () => {
        this.recognition.start();
    }

    findingAnswer(transcript) {
        const message = transcript.toLowerCase();

        // finding answer
        const answer = this.answersQuestions.find(sentence => {
            const val = sentence.questions.filter(str => {
                return message.includes(str);
            });
            if (val[0]) return message.includes(val[0]);
        });

        // Speek answer
        if (answer) {
            const { answers } = answer;
            const speekAnswer = answers[Math.floor(Math.random() * answers.length)];
            return this.speakMessage(speekAnswer)
        }
        return this.speakMessage('I dont know what to say');

    }

    addingAnswersQuestions() {

    }

    speakMessage(message) {
        const speech = this.speech;
        speech.length = 'en-US';
        speech.volume = 2;
        speech.rate = 1;
        speech.pitch = 1;

        speech.text = message;

        window.speechSynthesis.speak(speech);
    }
}

export default ReactSpeech;
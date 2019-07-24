class ReactSpeech {
    constructor(answersQuestions) {

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        // initialising of recognition
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-Us';
        // initialising of speech
        this.speech = new SpeechSynthesisUtterance();
        this.speech.lang = 'en-US';
        this.speech.volume = 2;
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
            if (callback);
            callback();
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
        console.log(message);

        // finding answer
        const answer = this.answersQuestions.find(sentence => {
            const val = sentence.questions.filter(str => {
                return message.includes(str);
            });

            return message.includes(val[0]);
        });

        if (!answer) return this.speakMessage('I dont know what to say');

        // Speek answer
        const { answers } = answer;
        const speekAnswer = answers[Math.floor(Math.random() * answers.length)];
        return this.speakMessage(speekAnswer);
    }

    addingAnswersQuestions() {

    }

    speakMessage(message) {
        this.speech.text = message;
        speechSynthesis.speak(this.speech);
    }
}

export default ReactSpeech;
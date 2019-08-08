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
            
            if (callback) callback(true);

            if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)) {
                return;
            }
            this.speakMessage('You can talk');
        };

        // End of conversation
        this.recognition.onspeechend = () => {
            console.log('end of talking');
        }

        // Result of talk
        this.recognition.onresult = (event) => {
            const current = event.resultIndex;
            this.transcript = event.results[current][0].transcript;
            this.findingAnswer(this.transcript);
        }

        this.recognition.onend = () => {
            if (callback) callback(false);
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
import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';
import cv from '../images/CV_Kamil_Skorzynski.pdf';

class ContactPage extends React.Component {
  state = {
    textAreaValue: '',
    nameValue: '',
    emailValue: '',
    subjectValue: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.nameValue &
      this.state.emailValue &
      this.state.subjectValue &
      this.state.textAreaValue
    )
      this.setState({
        textAreaValue: '',
        nameValue: '',
        emailValue: '',
        subjectValue: '',
      });
  };
  handleChangeNameInput = (e) => {
    this.setState({
      nameValue: e.target.value,
    });
  };

  handleChangeEmailInput = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  handleChangeSubjectInput = (e) => {
    this.setState({
      subjectValue: e.target.value,
    });
  };

  handleChangeTextArea = (e) => {
    this.setState({
      textAreaValue: e.target.value,
    });
  };

  render() {
    const { textAreaValue, nameValue, emailValue, subjectValue } = this.state;
    return (
      <>
        <div className="contact">
          <form action="https://formspree.io/meqrwoza" method="POST">
            <h3 className="form__title">Say hi!</h3>
            <div className="input__wrapper">
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={this.handleChangeNameInput}
                id="name"
                placeholder="Your name"
                className="input__contact"
              />
              <label htmlFor="name" className="input__label">
                Your name
              </label>
            </div>
            <div className="input__wrapper">
              <input
                type="email"
                name="email"
                value={emailValue}
                onChange={this.handleChangeEmailInput}
                id="email"
                placeholder="Your email"
                className="input__contact"
              />
              <label htmlFor="email" className="input__label">
                Your email
              </label>
            </div>

            <div className="input__wrapper">
              <input
                type="text"
                name="subject"
                value={subjectValue}
                onChange={this.handleChangeSubjectInput}
                id="subject"
                placeholder="Subject"
                className="input__contact"
              />
              <label htmlFor="subject" className="input__label">
                Subject
              </label>
            </div>
            <textarea
              placeholder="Text"
              name="message"
              className="textarea__contact"
              value={textAreaValue}
              onChange={this.handleChangeTextArea}
            ></textarea>
            <button
              disabled={
                nameValue && emailValue && subjectValue && textAreaValue
                  ? false
                  : true
              }
              type="submit"
              className="button__contact"
            >
              Send
            </button>
          </form>
          <Prompt
            when={
              this.state.nameValue ||
              this.state.emailValue ||
              this.state.subjectValue ||
              this.state.textAreaValue
            }
            message="You have not completed the form. Are you sure you want to leave this page?"
          />
          <div className="medias__contact">
            <div className="single__contact">
              <i class="fas fa-envelope-open-text"></i>
              <p className="contact__desc">skorzynskikamil@gmail.com</p>
            </div>
            <div className="single__contact">
              <i class="fas fa-phone-volume"></i>
              <p className="contact__desc">794-198-169</p>
            </div>
            <div className="single__contact">
              <i class="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/kamil-sk%C3%B3rzy%C5%84ski-a30a5415b/"
                className="contact__desc contact__desc--link"
              >
                View
              </a>
            </div>
            <div className="single__contact">
              <i class="fab fa-github"></i>
              <a
                href="https://github.com/skorzyk"
                className="contact__desc contact__desc--link"
              >
                https://github.com/skorzyk
              </a>
            </div>
            <div className="single__contact">
              <i class="fas fa-map-pin"></i>
              <p className="contact__desc">Cracow</p>
            </div>
            <div className="single__contact">
              <i class="fas fa-file"></i>
              <a
                href={cv}
                className="contact__desc contact__desc--link contact__desc--cv"
                download
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactPage;

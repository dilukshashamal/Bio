export const Contact = () => {
  return `
      <section id="contact">
          <h2 class="section-title">Contact Me</h2>
          <form class="contact-form">
              <input type="text" name="name" placeholder="Your Name" required>
              <input type="email" name="email" placeholder="Your Email" required>
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" class="btn">Send Message</button>
          </form>
      </section>
    `;
};

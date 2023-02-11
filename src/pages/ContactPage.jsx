

const ContactPage = () => {
  return (
    <section className="h-[70vh] text-yellow-50 flex flex-col gap-6 overflow-y-scroll">
      <h1 className="uppercase font-bold text-2xl sm:text-3xl">Contact Us</h1>
      <p>If you have any questions or comments about our software, we'd love to hear from you. Please reach out to us using one of the methods below:</p>
      <h2 className="font-bold">Email</h2>
      <p>You can send us an email at <a href="mailto:support@oursoftware.com">support@oursoftware.com</a>.</p>
      <h2 className="font-bold">Phone</h2>
      <p>You can reach us by phone at (123) 456-7890.</p>
      <h2 className="font-bold">Live Chat</h2>
      <p>You can chat with us in real-time using our live chat feature. Simply click the chat icon on our website to get started.</p>
      <h2 className="font-bold">Social Media</h2>
      <p>You can also reach us on social media. We are active on <a href="https://twitter.com/oursoftware">Twitter</a> and <a href="https://facebook.com/oursoftware">Facebook</a>.</p>
    </section>
  )
}

export default ContactPage

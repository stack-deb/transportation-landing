export default function GoogleMap() {
  return (
    <div className="h-96 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8384130689814!2d72.87307431490721!3d19.0759837870709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8773cb2f051%3A0x40576ac944236b34!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  )
}


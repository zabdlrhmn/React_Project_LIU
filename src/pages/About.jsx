export default function About() {
  return (
    <div>
      <h1>About Dr. Online</h1>
      <p className="lead">Dr. Online is a modern web application designed to bridge the communication gap between doctors and their patients.</p>

      <div className="accordion mt-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Our Mission
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our mission is to provide a secure and user-friendly platform that facilitates seamless interaction for healthcare purposes. We aim to empower patients by giving them easy access to medical information and a direct line of communication with their healthcare providers. For doctors, we provide tools to efficiently manage and communicate with their patients.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              For Patients
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              As a patient, you can register an account, connect with your doctor, receive important updates and study materials, and engage in community discussions to learn more about health topics that matter to you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              For Doctors
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              As a doctor, you can manage your patient list, securely share relevant medical studies and information, and contribute your expertise to a wider community in our discussion forums.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

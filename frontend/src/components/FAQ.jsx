import React from "react";

const FAQSection = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Some of Our Awesome Projects</h3>
          <p className="text-lg">
            This is the paragraph where you can write more details about your projects. Keep your
            user engaged by providing meaningful information.
          </p>
        </div>
        <div className="bg-base-200 collapse mb-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            <p>hello</p>
          </div>
        </div>
        <div className="bg-base-200 collapse mb-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            <p>hello</p>
          </div>
        </div>
        <div className="bg-base-200 collapse mb-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary-content peer-checked:text-black">
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

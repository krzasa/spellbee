import Navbar from "../Common/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main id="about">
      <h1 id="about-heading">About Us</h1>
      <h2 className="about-subheading">Who We Are</h2>
      <p className="about-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis
        suscipit, sunt cupiditate animi earum labore reprehenderit debitis dolor
        quibusdam delectus? Suscipit eaque quibusdam molestias nobis nisi et,
        saepe necessitatibus. Ullam, consequatur aperiam iste non eligendi,
        ipsum error dolorum recusandae quae modi magni itaque obcaecati quam
        nisi est tenetur vel quasi porro aliquid numquam repellendus. Iusto
        pariatur unde molestiae sit!
      </p>
      <section className="bio">
        <div className="avatar"></div>
        <p className="bio-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eos
          doloribus ipsam sunt odio harum fugiat dolorum quia laborum
          accusantium totam ducimus ipsa aut corrupti, velit molestias est
          aliquam quo.
        </p>
      </section>
      <section className="bio">
        <div className="avatar-2"></div>
        <p className="bio-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          explicabo modi dicta reiciendis dolore, consectetur corrupti eum
          impedit ad! Iusto quibusdam quia assumenda neque hic magnam nostrum
          unde consectetur quisquam?
        </p>
      </section>
      <h2 className="about-subheading">Why Build This?</h2>
      <p className="about-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia
        nobis eaque ad blanditiis magnam eos. Alias debitis, accusamus
        voluptatum corporis modi optio tempore esse ipsam magni enim obcaecati
        temporibus. Nobis eius eligendi unde nihil, soluta odit reiciendis
        nostrum enim provident esse numquam quo, ad pariatur veniam dicta! Ipsam
        assumenda, debitis doloremque autem facere magni. Quisquam omnis
        voluptatem perferendis error?
      </p>
    </main>
    </>
  );
};

export default About;

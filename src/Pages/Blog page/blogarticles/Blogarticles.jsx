import React from "react";
import "../blogarticles/Blogarticles.css";
import blog_one_img from "../../../assets/blog-one-img1.webp";
import blog_two_img from "../../../assets/blog-one-img2.webp";
import blog_img3 from "../../../assets/blog-article-img2.webp";
import blog_img5 from '../../../assets/blog-article-img3.webp'
import blog_img4 from "../../../assets/blog-article-img1.webp";
import blog_box3_img from "../../../assets/blog-box3-img.webp";
import blog_box4_img from '../../../assets/blog-box4-img.webp'
const Blogarticles = () => {
  return (
    <>
      <section>
        <div className="blog-sub-header">
          <h1 className="blog-subheading">Explore Our Articles</h1>
        </div>
        <div className="blog-cards">
          <div className="blog-card-one">
            <img
              src={blog_one_img}
              alt="blog-one-img"
              className="blog-one-img"
            />
            <div className="blog-one-content">
              <h3 className="blog-content-heading">
                The Goal of Gayatri Teertham: A Sacred Gift to the Guru
              </h3>
              <p className="blog-content-para">
                Gayatri Teertham Ashram is not just a building. It is a dream
                come true for Shri Ramakrishna Master. He loved and respected
                his teacher, Pandit Shri Ram Sharma Acharya, very much. His
                teacher had built a peaceful place (Shanthi Kunj) near the Ganga
                River for prayers and special ceremonies. Shri Ramakrishna
                Master also wanted to do something similar to honor his guru.
                So, he decided to spread the Gayatri Mantra and special prayers
                (called Yajnas) in the banks of Krishna River in South India and
                other places, just like his teacher did.
              </p>
            </div>
          </div>
          <div className="blog-card-two">
            <img
              src={blog_two_img}
              alt="blog-two-img"
              className="blog-two-img"
            />
            <div className="blog-two-content">
              <h3 className="blog-content-heading">
                The Krishna River's Special Role in Ashram Life
              </h3>
              <p className="blog-content-para">
                The Krishna River is very important to Gayatri Teertham Ashram.
                Just like the Ganga River is special for Shantikunj, the Krishna
                River is special for this Ashram. It gives energy, peace, and
                reminds us of God’s love.The Ashram is also near a place where
                Lord Krishna and his wives, Rukmini and Satyabhama, once
                appeared. That makes the riverbanks even more holy.
              </p>
            </div>
          </div>
        </div>
        <div className="blog-article-box2">
          <div className="blog-article-box2-left">
            <img src={blog_img3} alt="blog-article-box2-img" className="blog-article-box2-img"/>
            <div className="blog-article-box2-content">
              <h2 className="blog-article-box2-heading">Rituals and Yajnas: Keeping Our Ancient Traditions Alive</h2>
              <p className="blog-article-box2-para">At Gayatri Teertham – Sri Ramakrishna Shanti Ashram, we do special prayers and fire ceremonies called Yajnas. These are not just regular activities. They help us grow spiritually, make our minds and hearts pure, and bring peace to us and the world around us.
              These Yajnas come from the old Vedic teachings of Pandit Shri Ram Sharma Acharya. When we do these ceremonies, we try to understand what each part means. We believe that the mantras (holy words) we say have special power. These rituals help both people and the planet.</p>
            </div>

          </div>
          <div className="blog-article-box2-right">

             <div className="blog-article-card-box2">
             <img src={blog_img5} alt="blog-article-box2-img" className="blog-article-card-img"/>
            <div className="blog-article-box2-content">
              <h2 className="blog-article-box2-heading">Everyday Life at the Ashram: A Simple Way to Help, Pray, and Grow</h2>
              <p className="blog-article-box2-para">Life at Gayatri Teertham – Sri Ramakrishna Shanti Ashram is calm and peaceful, like a quiet walk in nature. People here live simply, help each other without expecting anything back (this is called Seva), and spend time praying and learning about God (called Sadhana).
              Each day usually starts with quiet time and morning prayers. This helps everyone feel peaceful and close to God.</p>
            </div>

             </div>
             <div className="blog-article-card-box2">
             <img src={blog_img4}alt="blog-article-box2-img" className="blog-article-card-img"/>
            <div className="blog-article-box2-content">
              <h2 className="blog-article-box2-heading">The Special Bond Between Guru and Shishya</h2>
              <p className="blog-article-box2-para">At Gayatri Teertham – Sri Ramakrishna Shanti Ashram, the relationship between the Guru and the Shishya is very important. This special connection is called Guru-Shishya Parampara, and it is the heart of everything we do at the Ashram.
              Pandit Shri Ram Sharma Acharya was a wise and loving teacher. His student, Shri Ramakrishna Master, learned many good things from him and always respected him deeply. Because of this love and respect, Shri Ramakrishna Master wanted to build an Ashram near the Krishna River to honor his teacher and share the same good teachings with others..</p>
            </div>
              
             </div>
          </div>
        </div>
 

        <div className="blog-article-box3">
          <div className="blog-article-box3-img-container">
            <img
              src={blog_box3_img}
              alt="blog-article-box3-img"
              className="blog-article-box3-img"
            />
          </div>
          <div className="blog-article-box3-box-content">
            <h3 className="blog-article-box3-heading">
              We’re Celebrating Krishnashtami at Gayatri Teertham!
            </h3>
            <p className="blog-article-box3-text">
              A big, happy celebration is happening at Gayatri Teertham! We are
              celebrating Krishnashtami — the special day of Lord Krishna’s
              birth — with lots of love, fun, and devotion.The whole Ashram will
              be decorated with bright colors and flowers. We will sing special
              songs called bhajans, and there may even be traditional dances
              that tell stories about Lord Krishna’s life.Come and join us for
              this beautiful celebration! It’s a time to feel happy, peaceful,
              and full of love for Lord Krishna.
            </p>
          </div>
        </div>
        <div className="blog-article-box4">
        <div className="blog-box4-header">
              <h2 className="blog-box4-subheading">
              Visiting Our Gosala – A Peaceful Place with Gentle Cows
              </h2>
            </div>
          <div className="blog-article-inner-box4">
           
            <div className="blog-box4-content">
              <p className="blog-box4-para">
              When you visit our Ashram, you will find a very special place called the Gosala. This is the home for our kind and loving cows. It is quiet and peaceful here. Instead of city noise, you will hear the soft sounds of cows mooing.The Gosala is not just a shelter. It shows our love and respect for animals, especially cows, which are very special in our culture. We follow the old Vedic tradition called Gomata Seva, which means serving and caring for cows.Each cow here has its own name and sweet nature. As you walk near their clean shelters in the sunlight, you will feel calm and happy inside. It’s a lovely place to visit, relax, and feel close to nature 
              </p>

            </div>
            <div className="blog-box4-imgcontainer">
                <img src={blog_box4_img} alt="" className="blog-box4-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogarticles;

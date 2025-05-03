"use client"

import { useState, useEffect } from "react"
import "./App.css"

const blogData = [
  {
    id: 1,
    day: "Day 1",
    title: "A Walk Through Time: Exploring Intramuros and Rizal Park",
    date: "April 5, 2023",
    summary: "A day spent wandering through Manila’s historic heart—Intramuros and Rizal Park—revealed a deeper appreciation for Philippine history, culture, and the resilience of its people. This trip wasn't just sightseeing—it was a journey back in time.",
    content: `
     <p>There’s something magical about walking where history happened. Our recent trip to Intramuros and Rizal Park gave us a front-row view of Manila’s rich past, wrapped in old stone walls, national pride, and poignant memorials.</p>
     <p>We started our day in Intramuros, the "Walled City" that once served as the political and military heart of Spanish colonial Manila. As we walked along Fort Santiago, we were immersed in cobblestone streets, antique buildings, and stories of heroes like Dr. José Rizal, who was imprisoned here before his execution. Every step echoed with stories of resilience and resistance.</p>
     <p>We also headed to Rizal Park—also known as Luneta—where the monument of Dr. Rizal stands tall, guarded with solemn honor. The wide open space, with its gardens, fountains, and historical markers, offered both serenity and reflection. We paused by the execution site of Rizal, which stands as a powerful reminder of the fight for freedom.</p>
     <p>The visit wasn’t just about photos or sightseeing—it was about reconnecting with our identity. Places like Intramuros and Rizal Park aren't just tourist spots; they are living museums that continue to teach and inspire.</p>
    `,
    images: [
      "/d1/head.jpg",
      "/d1/491340765_1383524872586384_7425397214383891509_n.jpg",
      "/d1/Day1-ODyHGS-a.jpg",
      "/d1/Day 1.1.jpg",
       
    ],
  },
  {
    id: 2,
    day: "Day 2",
    title: "Discovering Subic - SBMA and SBECC Adventures",
    date: "July 15, 2023",
    summary: "On our second day, we ventured out of Manila to the vibrant and peaceful Subic Bay Freeport Zone (SBMA) and explored the exciting Subic Bay Economic and Commercial Center (SBECC). It was a day of beautiful landscapes, bustling markets, and a blend of nature and commerce.",
    content: `
      <p>After a rich experience in the heart of Manila, we made our way to Subic Bay, a former U.S. naval base turned dynamic freeport zone, now home to a flourishing economy and natural wonders. Our first stop was SBMA, the Subic Bay Metropolitan Authority, a remarkable example of how a region can evolve from military use to a thriving business and tourism hub.</p>
      <p>Subic’s charm lies in its mix of modern developments and the natural beauty that surrounds it. The Subic Bay itself, with its sparkling blue waters, mountains in the distance, and the quiet hum of industry, gave us a fresh perspective on the importance of sustainability. As we strolled along the bay, the fresh air and scenic views made it a perfect spot for relaxation.</p>
      <p>Next, we headed to SBECC—the Subic Bay Economic and Commercial Center—where we saw the convergence of commerce, culture, and community. The area was buzzing with local vendors, international brands, and a range of restaurants offering global and Filipino cuisine. The markets were alive with energy, and it was a great place to experience Subic’s diverse offerings, from fresh seafood to locally crafted products.</p>
      <p>What made our trip special was the smooth blend of Subic’s natural landscapes with its modern amenities. Whether we were marveling at the freeport’s innovative designs or enjoying the stunning backdrop of mountains, Subic proved to be a destination full of surprises.</p>

    `,
    images: [
      "/d2/head.png",
      "/d2/1.jpg",
      "/d2/2.jpg",
      "/d2/3.jpg",
      "/d2/4.png",
      "/d2/5.jpg",
      "/d2/6.jpg",
    ],
  },
  {
    id: 3,
    day: "Day 3",
    title: "Heritage and Honor – Quezon Memorial Circle and the National Museum",
    date: "November 10, 2023",
    summary: "Continuing our week-long journey, Day 3 took us through the political legacy of Quezon Memorial Circle and the rich cultural treasures housed in the National Museum of the Philippines—two destinations that deepened our appreciation for Filipino identity.",
    content: `
      <p> With two days of exploration behind us, Day 3 offered a deeper dive into the heart of Philippine history and nation-building. Our morning began at Quezon Memorial Circle, a green oasis in the middle of Quezon City that honors Manuel L. Quezon, the country’s first Commonwealth President. The monument’s towering structure, adorned with angel statues and housing Quezon’s tomb, stood as a solemn reminder of leadership and national progress.</p>
      <p>The park was more than just a memorial—it was lively and family-friendly, with gardens, biking areas, and small museums. It gave us a unique mix of learning and leisure, showing how public spaces can serve both remembrance and recreation. </p>
      <p> In the afternoon, we headed to the National Museum Complex, which includes the National Museum of Fine Arts, Natural History, and Anthropology. We spent most of our time in the Fine Arts section, where we stood in awe before Juan Luna’s iconic Spoliarium. Each gallery presented a different aspect of Filipino culture—from colonial resistance and religious art to indigenous traditions and modern expression.</p>
      <p> Walking through the museum was like flipping through the pages of our nation’s collective memory. It wasn’t just about facts or artifacts—it was about stories, creativity, and identity.</p>
    `,
    images: [
      "/d3/head.jpg",
      "/d3/1.png",
      "/d3/2.jpg",
      "/d3/3.jpg",
      "/d3/4.jpg",
      "/d3/5.jpg",
      "/d3/6.jpg",
    ],
  },
  {
    id: 4,
    day: "Day 4",
    title: "From Currency to Code – Bangko Sentral ng Pilipinas and HyTech Power Inc.",
    date: "January 20, 2024",
    summary: "Day 4 offered a fascinating look into the evolution of finance and technology in the Philippines, as we visited the Bangko Sentral ng Pilipinas (BSP) and toured HyTech Power Inc., a company at the forefront of innovation.",
    content: `
       <p>Our fourth day was all about progress and innovation. We began with a rare and insightful visit to the Bangko Sentral ng Pilipinas (BSP), the country’s central bank. Known as the institution that safeguards the Philippine economy, BSP gave us a behind-the-scenes look at how money is made, regulated, and protected.</p>
       <p>We explored exhibits that showcased the history of Philippine currency, from ancient barter systems to modern banknotes and coins. There were interactive displays, security features of money, and even old printing machines used in currency production. The visit was eye-opening—it made us realize that currency isn’t just paper or metal, but a reflection of a nation’s journey and stability.</p>
       <p>In the afternoon, we headed to HyTech Power Inc., a technology solutions company focused on innovation and energy efficiency. There, we got a glimpse of how Filipino tech companies are contributing to modernization through smart systems, renewable energy tech, and custom digital solutions.</p>
       <p>The company tour included a discussion on their projects, showcasing how local companies are solving real-world problems using tech. What stood out most was how committed they were to sustainability, efficiency, and nation-building through digital transformation.</p>
       <p>By the end of the day, we gained a whole new appreciation for both economic stewardship and technological advancement. It reminded us that the future of the Philippines lies not only in remembering our past but also in adapting to the ever-evolving world.</p>
    `,
    images: [
      "/d4/head.jpg",
      "/d4/1.png",
      "/d4/2.png",
      "/d4/3.jpg",
      "/d4/4.jpg",
      "/d4/5.jpg",
       
    ],
  },
  {
    id: 5,
    day: "Day 5",
    title: "Urban Management in Motion – MMDA and the Office of the LRTA",
    date: "March 3, 2024",
    summary: "Day 5 brought us into the world of urban planning and public transportation as we visited the Metropolitan Manila Development Authority (MMDA) and the Light Rail Transit Authority (LRTA) Office, learning how the city moves and adapts to daily challenges.",
    content: `
      <p>On our fifth day, we explored two institutions responsible for keeping Metro Manila running smoothly—the MMDA and the LRTA. These agencies play vital roles in managing the flow of people, vehicles, and systems across the capital.</p>
      <p>Our first stop was the MMDA Headquarters, where we were welcomed with a short orientation about the agency’s duties. From traffic control and flood prevention to disaster response and urban planning, the MMDA’s scope of work is broad and complex. We were shown how traffic is monitored through CCTV feeds, real-time data systems, and command centers. It was fascinating to see how modern technology helps manage the daily congestion and emergencies in the metro.</p>
      <p>Next, we visited the Light Rail Transit Authority (LRTA), specifically the office that oversees the operations of LRT Line 2. The visit gave us insight into the planning, safety protocols, and maintenance required to keep trains running efficiently. We learned about the challenges of mass transit in a growing metropolis and how the LRTA addresses issues such as passenger safety, system upgrades, and route expansion.</p>
      <p>The experience gave us a deeper appreciation for the people working behind the scenes to improve the quality of urban life. Their efforts often go unnoticed, but without them, city life would be far more chaotic and difficult.</p>
    `,
    images: [
      "/d5/head.jpeg",
      "/d5/1.png",
      "/d5/2.png",
      "/d5/3.png",
      "/d5/4.jpg",
      "/d5/5.jpg",
       
    ],
  },
  {
    id: 6,
    day: "Day 6",
    title: "A Breath of Fresh Air – Baguio Tour to Strawberry Farm, PMA, Burnham Park, and Night Market",
    date: "March 3, 2024",
    summary: "Day 5 brought us into the world of urban planning and public transportation as we visited the Metropolitan Manila Development Authority (MMDA) and the Light Rail Transit Authority (LRTA) Office, learning how the city moves and adapts to daily challenges.",
    content: `
      <pAfter days of exploring the metro, Day 6 gave us a much-needed escape to the City of Pines—Baguio. The cooler climate and fresh mountain air instantly lifted our spirits as we began our scenic adventure.></p>
      <p>Our first stop was the Strawberry Farm in nearby La Trinidad, Benguet. Surrounded by rows of vibrant greenery, we got the chance to pick our own strawberries—a fun and hands-on experience that made us appreciate the work behind every sweet bite. The farm also offered local treats like strawberry taho and jam, perfect souvenirs from our morning visit.</p>
      <p>Next, we visited the Philippine Military Academy (PMA), where we witnessed the discipline, honor, and structure that define the country’s premier military school. We explored the museum, admired the campus grounds, and even saw some cadets in formation. It was both inspiring and educational, giving us a glimpse into the life of future defenders of the nation.</p>
      <p>In the afternoon, we took a relaxing stroll at Burnham Park, one of Baguio’s most iconic spots. Surrounded by flowers and tall pine trees, the park offered us a peaceful break with activities like boating, biking, and just lounging on the grass. It was the perfect place to unwind and take in the natural beauty of the city.</p>
      <p>As the sun set, our day ended on a high note at the Baguio Night Market along Harrison Road. The bustling street came alive with rows of thrift clothes, food stalls, souvenirs, and local crafts. Whether you were hunting for ukay-ukay treasures or grabbing a warm cup of strawberry juice, the night market was the perfect blend of culture, commerce, and community.</p>
      <p>From farm fields to military grounds, from peaceful parks to vibrant night markets, Day 6 was a well-rounded experience that reminded us of Baguio’s charm—both calm and alive.</p>  
    `,
    images: [
      "/d6/head.jpg",
      "/d6/1.jpg",
      "/d6/2.jpg",
      "/d6/3.jpg",
      "/d6/4.jpg",
      "/d6/5.jpg",
      "/d6/6.jpg",
      "/d6/7.jpg",
      "/d6/8.jpg",
       
    ],
  },
]

function App() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [sakuraVisible, setSakuraVisible] = useState(true)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    // Add meta viewport tag for better mobile responsiveness
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.getElementsByTagName("head")[0].appendChild(meta)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleBackClick = () => {
    setSelectedPost(null)
    window.scrollTo(0, 0)
    setSakuraVisible(true)
  }

  const handlePostSelect = (post) => {
    setSelectedPost(post)
    setSakuraVisible(false)
  }

  return (
    <div className="app">
      {sakuraVisible && <SakuraAnimation />}
      {selectedPost ? (
        <BlogDetail post={selectedPost} onBack={handleBackClick} isMobile={isMobile} />
      ) : (
        <BlogList posts={blogData} onSelect={handlePostSelect} isMobile={isMobile} />
      )}
    </div>
  )
}

function SakuraAnimation() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const createPetals = () => {
      const newPetals = []
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 10,
          size: 10 + Math.random() * 20,
        })
      }
      setPetals(newPetals)
    }

    createPetals()
    const interval = setInterval(createPetals, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sakura-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="#ffb7c5"
              d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8M12,11C13.1,11 14,11.9 14,13C14,14.1 13.1,15 12,15C10.9,15 10,14.1 10,13C10,11.9 10.9,11 12,11M19,17V19H5V17C5,14.8 8.1,13 12,13C15.9,13 19,14.8 19,17Z"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

function BlogList({ posts, onSelect, isMobile }) {
  return (
    <div className="blog-list-container">
      <header className="header">
        <div className="header-content">
          <h1>教育旅行 - Educational Tour</h1>
          <p>学びの旅: 知識と文化を深める冒険 - A Journey of Learning: An Adventure to Deepen Knowledge and Culture</p>
          <div className="header-decoration">
            <div className="wave-pattern"></div>
          </div>
        </div>
      </header>

      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onSelect={onSelect} isMobile={isMobile} />
        ))}
      </div>

      <footer className="footer">
        <div className="footer-pattern"></div>
        <p>© {new Date().getFullYear()} 日本の旅 - Journey To Luzon</p>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </footer>
    </div>
  )
}

function BlogCard({ post, onSelect }) {
  return (
    <div className="blog-card" onClick={() => onSelect(post)}>
      <div className="card-image" style={{ backgroundImage: `url(${post.images[0]})` }}>
        <div className="card-day">{post.day}</div>
      </div>
      <div className="card-content">
        <h2>{post.title}</h2>
        <p className="date">{post.date}</p>
        <p className="summary">{post.summary}</p>
        <div className="view-details">
          <span>続きを読む (Read More)</span>
          <div className="arrow-icon">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlogDetail({ post, onBack, isMobile }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % post.images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [post.images.length])

  return (
    <div className="blog-detail-container">
      <button onClick={onBack} className="back-button">
        <i className="fas fa-arrow-left"></i>
        {!isMobile && <span>記事一覧に戻る (Back to All Posts)</span>}
      </button>

      <div className="detail-header">
        <div className="header-overlay"></div>
        <img 
          src={post.images[currentImage] || "/placeholder.svg"} 
          alt={post.title} 
          className="header-image" 
        />
        <div className="header-content">
          <div className="day-badge">{post.day}</div>
          <h1>{post.title}</h1>
          <p className="date">{post.date}</p>
        </div>
      </div>

      <div className="content-container">
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="image-gallery">
          {post.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image || "/placeholder.svg"}
                alt={`${post.title} - ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
        <button onClick={onBack} className="back-button bottom-button">
          <i className="fas fa-arrow-left"></i>
          {!isMobile && <span>記事一覧に戻る (Back to All Posts)</span>}
        </button>
      </div>
    </div>
  )
}

export default App
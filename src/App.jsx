"use client"

import { useState, useEffect } from "react"
import "./app.css"

const blogData = [
  {
    id: 1,
    day: "Day 1",
    title: "A Walk Through Time: Exploring Intramuros and Rizal Park",
    date: "April 7, 2025",
    summary: "A day spent wandering through Manila's historic heart—Intramuros and Rizal Park—revealed a deeper appreciation for Philippine history, culture, and the resilience of its people. This trip wasn't just sightseeing—it was a journey back in time.",
    content: `
     <p>There's something magical about walking where history happened. Our recent trip to Intramuros and Rizal Park gave us a front-row view of Manila's rich past, wrapped in old stone walls, national pride, and poignant memorials.</p>
     <p>We started our day in Intramuros, the "Walled City" that once served as the political and military heart of Spanish colonial Manila. As we walked along Fort Santiago, we were immersed in cobblestone streets, antique buildings, and stories of heroes like Dr. José Rizal, who was imprisoned here before his execution. Every step echoed with stories of resilience and resistance.</p>
     <p>We also headed to Rizal Park—also known as Luneta—where the monument of Dr. Rizal stands tall, guarded with solemn honor. The wide open space, with its gardens, fountains, and historical markers, offered both serenity and reflection. We paused by the execution site of Rizal, which stands as a powerful reminder of the fight for freedom.</p>
     <p>The visit wasn't just about photos or sightseeing—it was about reconnecting with our identity. Places like Intramuros and Rizal Park aren't just tourist spots; they are living museums that continue to teach and inspire.</p>
    `,
    images: [
      "/d1/head.jpg",
      "/d1/491340765_1383524872586384_7425397214383891509_n.jpg",
      "/d1/Day1-ODyHGS-a.jpg",
      "/d1/Day 1.1.jpg",
    ],
    location: "Little Italy, Historic District",
  },
  {
    id: 2,
    day: "Day 2",
    title: "Discovering Subic - SBMA and SBECC Adventures",
    date: "April 8, 2025",
    summary: "On our second day, we ventured out of Manila to the vibrant and peaceful Subic Bay Freeport Zone (SBMA) and explored the exciting Subic Bay Economic and Commercial Center (SBECC). It was a day of beautiful landscapes, bustling markets, and a blend of nature and commerce.",
    content: `
      <p>After a rich experience in the heart of Manila, we made our way to Subic Bay, a former U.S. naval base turned dynamic freeport zone, now home to a flourishing economy and natural wonders. Our first stop was SBMA, the Subic Bay Metropolitan Authority, a remarkable example of how a region can evolve from military use to a thriving business and tourism hub.</p>
      <p>Subic's charm lies in its mix of modern developments and the natural beauty that surrounds it. The Subic Bay itself, with its sparkling blue waters, mountains in the distance, and the quiet hum of industry, gave us a fresh perspective on the importance of sustainability. As we strolled along the bay, the fresh air and scenic views made it a perfect spot for relaxation.</p>
      <p>Next, we headed to SBECC—the Subic Bay Economic and Commercial Center—where we saw the convergence of commerce, culture, and community. The area was buzzing with local vendors, international brands, and a range of restaurants offering global and Filipino cuisine. The markets were alive with energy, and it was a great place to experience Subic's diverse offerings, from fresh seafood to locally crafted products.</p>
      <p>What made our trip special was the smooth blend of Subic's natural landscapes with its modern amenities. Whether we were marveling at the freeport's innovative designs or enjoying the stunning backdrop of mountains, Subic proved to be a destination full of surprises.</p>
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
    location: "Little Italy, Historic District",
  },
  {
    id: 3,
    day: "Day 3",
    title: "Heritage and Honor – Quezon Memorial Circle and the National Museum",
    date: "April 9, 2025",
    summary: "Continuing our week-long journey, Day 3 took us through the political legacy of Quezon Memorial Circle and the rich cultural treasures housed in the National Museum of the Philippines—two destinations that deepened our appreciation for Filipino identity.",
    content: `
      <p>With two days of exploration behind us, Day 3 offered a deeper dive into the heart of Philippine history and nation-building. Our morning began at Quezon Memorial Circle, a green oasis in the middle of Quezon City that honors Manuel L. Quezon, the country's first Commonwealth President. The monument's towering structure, adorned with angel statues and housing Quezon's tomb, stood as a solemn reminder of leadership and national progress.</p>
      <p>The park was more than just a memorial—it was lively and family-friendly, with gardens, biking areas, and small museums. It gave us a unique mix of learning and leisure, showing how public spaces can serve both remembrance and recreation.</p>
      <p>In the afternoon, we headed to the National Museum Complex, which includes the National Museum of Fine Arts, Natural History, and Anthropology. We spent most of our time in the Fine Arts section, where we stood in awe before Juan Luna's iconic Spoliarium. Each gallery presented a different aspect of Filipino culture—from colonial resistance and religious art to indigenous traditions and modern expression.</p>
      <p>Walking through the museum was like flipping through the pages of our nation's collective memory. It wasn't just about facts or artifacts—it was about stories, creativity, and identity.</p>
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
    location: "Little Italy, Historic District",
  },
  {
    id: 4,
    day: "Day 4",
    title: "From Currency to Code – Bangko Sentral ng Pilipinas and HyTech Power Inc.",
    date: "April 10, 2025",
    summary: "Day 4 offered a fascinating look into the evolution of finance and technology in the Philippines, as we visited the Bangko Sentral ng Pilipinas (BSP) and toured HyTech Power Inc., a company at the forefront of innovation.",
    content: `
       <p>Our fourth day was all about progress and innovation. We began with a rare and insightful visit to the Bangko Sentral ng Pilipinas (BSP), the country's central bank. Known as the institution that safeguards the Philippine economy, BSP gave us a behind-the-scenes look at how money is made, regulated, and protected.</p>
       <p>We explored exhibits that showcased the history of Philippine currency, from ancient barter systems to modern banknotes and coins. There were interactive displays, security features of money, and even old printing machines used in currency production. The visit was eye-opening—it made us realize that currency isn't just paper or metal, but a reflection of a nation's journey and stability.</p>
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
    location: "Little Italy, Historic District",
  },
  {
    id: 5,
    day: "Day 5",
    title: "Urban Management in Motion – MMDA and the Office of the LRTA",
    date: "April 11, 2025",
    summary: "Day 5 brought us into the world of urban planning and public transportation as we visited the Metropolitan Manila Development Authority (MMDA) and the Light Rail Transit Authority (LRTA) Office, learning how the city moves and adapts to daily challenges.",
    content: `
      <p>On our fifth day, we explored two institutions responsible for keeping Metro Manila running smoothly—the MMDA and the LRTA. These agencies play vital roles in managing the flow of people, vehicles, and systems across the capital.</p>
      <p>Our first stop was the MMDA Headquarters, where we were welcomed with a short orientation about the agency's duties. From traffic control and flood prevention to disaster response and urban planning, the MMDA's scope of work is broad and complex. We were shown how traffic is monitored through CCTV feeds, real-time data systems, and command centers. It was fascinating to see how modern technology helps manage the daily congestion and emergencies in the metro.</p>
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
    location: "Little Italy, Historic District",
  },
  {
    id: 6,
    day: "Day 6",
    title: "A Breath of Fresh Air – Baguio Tour to Strawberry Farm, PMA, Burnham Park, and Night Market",
    date: "April 12, 2025",
    summary: "Our sixth day took us to the cool mountain city of Baguio, where we enjoyed strawberry picking, visited the Philippine Military Academy, relaxed at Burnham Park, and explored the vibrant night market—a perfect blend of nature, culture, and local experiences.",
    content: `
      <p>After days of exploring the metro, Day 6 gave us a much-needed escape to the City of Pines—Baguio. The cooler climate and fresh mountain air instantly lifted our spirits as we began our scenic adventure.</p>
      <p>Our first stop was the Strawberry Farm in nearby La Trinidad, Benguet. Surrounded by rows of vibrant greenery, we got the chance to pick our own strawberries—a fun and hands-on experience that made us appreciate the work behind every sweet bite. The farm also offered local treats like strawberry taho and jam, perfect souvenirs from our morning visit.</p>
      <p>Next, we visited the Philippine Military Academy (PMA), where we witnessed the discipline, honor, and structure that define the country's premier military school. We explored the museum, admired the campus grounds, and even saw some cadets in formation. It was both inspiring and educational, giving us a glimpse into the life of future defenders of the nation.</p>
      <p>In the afternoon, we took a relaxing stroll at Burnham Park, one of Baguio's most iconic spots. Surrounded by flowers and tall pine trees, the park offered us a peaceful break with activities like boating, biking, and just lounging on the grass. It was the perfect place to unwind and take in the natural beauty of the city.</p>
      <p>As the sun set, our day ended on a high note at the Baguio Night Market along Harrison Road. The bustling street came alive with rows of thrift clothes, food stalls, souvenirs, and local crafts. Whether you were hunting for ukay-ukay treasures or grabbing a warm cup of strawberry juice, the night market was the perfect blend of culture, commerce, and community.</p>
      <p>From farm fields to military grounds, from peaceful parks to vibrant night markets, Day 6 was a well-rounded experience that reminded us of Baguio's charm—both calm and alive.</p>  
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
    location: "Little Italy, Historic District",
  },
  {
    id: 7,
    day: "Compilation",
    title: "Rediscovering the Philippines: A 7-Day Journey of History, Innovation, and Culture",
    date: "April 7-12, 2025",
    summary: "In one unforgettable week, we traveled across Luzon—uncovering the nation's rich history, learning from its modern institutions, and experiencing its diverse culture firsthand. From the walled city of Intramuros to the cool heights of Baguio, each day gave us a new lens to view the Philippines with pride and curiosity.",
    content: `
      <p>Day 1: A Walk Through Time – Intramuros and Rizal Park
      We kicked off our journey in Manila, where the echoes of the past still live on. In Intramuros, we explored cobblestone streets, Spanish-era churches, and Fort Santiago, where heroes like José Rizal once walked. Later, we visited Rizal Park, where his monument stands as a tribute to freedom and national identity. It was a humbling day of remembrance and pride.</p>
      <p>Day 2: Coastal Calm – Exploring SBMA and SBECC in Subic
      Day two took us to Subic Bay, where we saw how a former military base transformed into a thriving economic zone. At SBMA, we witnessed a balance of business and nature, while the SBECC introduced us to vibrant markets, local industries, and commercial innovation. Subic showed us a progressive Philippines grounded in sustainability.</p>
      <p>Day 3: Legacy and Learning – Quezon Memorial Circle and the National Museum
      We began our third day at Quezon Memorial Circle, where we honored the legacy of President Manuel L. Quezon. In the afternoon, the National Museum immersed us in Filipino art, history, and anthropology—from Luna's Spoliarium to pre-colonial artifacts. A perfect day to reflect on national identity through monuments and masterpieces.</p>
      <p>Day 4: From Currency to Code – Bangko Sentral ng Pilipinas and HyTech Power Inc.
      We explored the past and future of innovation in Day 4. At the Bangko Sentral ng Pilipinas, we learned how our currency evolved and is protected today. Then at HyTech Power Inc., we witnessed how technology is transforming industries with smart, sustainable solutions. The day highlighted how innovation drives national growth.</p>
      <p>Day 5: Urban Management in Motion – MMDA and LRTA Office
      Day five gave us insight into how the city functions behind the scenes. The MMDA showed us traffic control, emergency response, and urban planning in real time. At the LRTA office, we learned how the LRT Line 2 is maintained, operated, and improved to serve the public better. It was a day that reminded us of the hard work that keeps cities moving.</p>
      <p>Day 6: A Breath of Fresh Air – Baguio Tour
      We escaped the metro heat and traveled to Baguio City, where we picked strawberries in La Trinidad, visited the honorable Philippine Military Academy, relaxed at Burnham Park, and ended the day at the lively Night Market. This highland retreat gave us nature, discipline, leisure, and local flavor all in one unforgettable day.</p>`,
    images: [
      "/d1/head.jpg",
      "/d2/head.png",
      "/d3/head.jpg",
      "/d4/head.jpg",
      "/d5/head.jpeg",
      "/d6/head.jpg",
      "/d1/Day1-ODyHGS-a.jpg",
      "/d2/3.jpg",
      "/d3/5.jpg",
      "/d4/5.jpg",
      "/d5/4.jpg",
      "/d6/8.jpg",
    ],
    location: "Little Italy, Historic District",
  },
]

function App() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)
  }, [])

  const handlePostSelect = (post) => {
    setSelectedPost(post)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const handleBackClick = () => {
    setSelectedPost(null)
    window.scrollTo(0, 0)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`app ${isLoaded ? "app-loaded" : ""}`}>
      <header className="site-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <h1> Educational Tour</h1>
              <p className="tagline">A Journey of Learning: An Adventure to Deepen Knowledge and Culture</p>
            </div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
               
            </nav>
          </div>
        </div>
      </header>

      <main className="site-main">
        {selectedPost ? (
          <BlogPost post={selectedPost} onBack={handleBackClick} />
        ) : (
          <BlogList posts={blogData} onSelect={handlePostSelect} />
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <h2>Famiglia Chronicles</h2>
              <p className="footer-motto">"Family is the strongest bond"</p>
            </div>
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Archives</a>
                </li>
                <li>
                  <a href="#">Family Tree</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>New York City, NY</p>
              <p>info@famigliachronicles.com</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Famiglia Chronicles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlogList({ posts, onSelect }) {
  return (
    <div className="blog-list">
      <div className="section-header">
        <h2>Recent Chronicles</h2>
        <div className="section-divider"></div>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card" onClick={() => onSelect(post)}>
            <div className="post-image">
              <img src={post.images[0] || "/placeholder.svg"} alt={post.title} />
              <div className="post-badge">{post.day}</div>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-location">{post.location}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.summary}</p>
              <button className="read-more">
                Read More
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M13.4 12l-4.7-4.7 1.4-1.4 6.1 6.1-6.1 6.1-1.4-1.4z" />
                </svg>
              </button>
            </div>
          </article>
        ))}

        
      </div>
    </div>
  )
}

function BlogPost({ post, onBack }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % post.images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [post.images.length])

  return (
    <article className="blog-post">
      <button onClick={onBack} className="back-button">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <span>Back to Chronicles</span>
      </button>

      <header className="post-header">
        <div className="post-meta">
          <span className="post-badge">{post.day}</span>
          <span className="post-date">{post.date}</span>
          <span className="post-location">{post.location}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </header>

      <div className="post-featured-image">
        {post.images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`${post.title} - image ${index + 1}`}
            className={`featured-image ${index === activeImageIndex ? "active" : ""}`}
          />
        ))}
        <div className="image-indicators">
          {post.images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeImageIndex ? "active" : ""}`}
              onClick={() => setActiveImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <div className="post-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {post.images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => setActiveImageIndex(index)}>
              <img src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="post-footer">
        <button onClick={onBack} className="back-button">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Chronicles</span>
        </button>
      </div>
    </article>
  )
}

export default App

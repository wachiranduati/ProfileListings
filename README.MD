# 🌍 FriendConnect Platform

A modern social discovery platform where users can create public profiles, connect with others, publish blogs, create classifieds, purchase memberships, and promote themselves through paid visibility packages and banner ads.

The platform is scalable, containerized, and production-ready for deployment on **AWS** or **GCP**.

---

# 🧱 Tech Stack

## Frontend
- HTML5
- Tailwind CSS
- React
- React Router
- Axios
- React Query (lazy loading & caching)
- Context API / Zustand

## Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- Multer (file uploads)
- MPESA Integration
- Redis (optional caching)

## DevOps
- Docker
- Docker Compose
- Nginx (Reverse Proxy)
- AWS / GCP Ready

---

# 🎯 Platform Overview

FriendConnect allows users to:

- Sign up and create public profiles
- Upload images and verified videos
- Message other users (logged-in only)
- Purchase visibility packages (Regular → VIP)
- Buy banner advertisements
- Publish blogs
- Post classifieds
- Manage wallet & payments via MPESA
- Verify profile photos for a **“Real Photo” badge**

Profiles are ranked based on membership packages:

1. VIP
2. Prime VIP
3. Prime
4. Regular

Listings are lazy-loaded and browser-cached to reduce server load.

---

# 🗂 Development Roadmap

---

## ✅ Phase 1: Project Setup & Environment

- [ ] Initialize Git repository  
- [ ] Setup Node.js project structure  
- [ ] Setup Express server  
- [ ] Setup PostgreSQL database  
- [ ] Configure environment variables  
- [ ] Setup React project  
- [ ] Install Tailwind CSS  
- [ ] Setup Docker & Docker Compose  
- [ ] Configure development environment (client + server)

---

## ✅ Phase 2: Backend API Development

### Core Database Design

- [ ] Design database schema  
- [ ] Users table  
- [ ] Profiles table  
- [ ] Memberships table  
- [ ] Wallet transactions table  
- [ ] Classifieds table  
- [ ] Blogs table  
- [ ] Banner ads table  
- [ ] Messages table  
- [ ] Verification table  

---

### Authentication System

- [ ] User registration  
- [ ] User login  
- [ ] JWT authentication  
- [ ] Protected routes middleware  
- [ ] Role-based access control  

---

### Profile System

- [ ] Create profile endpoint  
- [ ] Update profile endpoint  
- [ ] Upload profile photo  
- [ ] Upload gallery images  
- [ ] Upload videos (verified users only)  
- [ ] Profile activation toggle  
- [ ] Chat activation toggle  
- [ ] Package-based ranking logic  

---

### Messaging System

- [ ] Create conversation  
- [ ] Send message  
- [ ] Fetch inbox  
- [ ] Enable/disable chat  

---

### Membership & Payments

- [ ] Wallet system  
- [ ] Add funds endpoint  
- [ ] MPESA payment integration  
- [ ] Deduct membership payment  
- [ ] Assign membership tier  
- [ ] Track expiry dates  
- [ ] Banner purchase system  

---

### Classifieds API

- [ ] Create classified  
- [ ] Upload gallery  
- [ ] Show/hide phone & name  
- [ ] Payment processing  
- [ ] Moderation states:
  - [ ] Unpublished  
  - [ ] In moderation  
  - [ ] Approved  
  - [ ] Rejected  

---

### Blogs API

- [ ] Create blog  
- [ ] Tag blog  
- [ ] Fetch blog listings  
- [ ] View single blog  

---

### Photo Verification

- [ ] Upload verification photo  
- [ ] Admin approval system  
- [ ] Assign “Real Photo” badge  

---

## ✅ Phase 3: Frontend Development

---

## 🌐 Homepage

- [ ] Sticky Navbar (shared globally)  
- [ ] Header text section  
- [ ] Kenya county/region filter tags  
- [ ] 3x6 Banner Ad Grid  
- [ ] Call & WhatsApp CTA on banners  
- [ ] Profile Grid (4 per row)  
- [ ] Lazy loading implementation  
- [ ] Browser caching implementation  
- [ ] Hover image → swap to video  
- [ ] CTA buttons (Call, WhatsApp, Telegram)  
- [ ] Package-based profile ordering  

---

## 👤 Profile (Author) Page

- [ ] Large bio section  
- [ ] Gallery images  
- [ ] Videos  
- [ ] Contact buttons  
- [ ] Telegram link  
- [ ] Social media links  
- [ ] Profile tags (SEO optimized)  
- [ ] Incall/Outcall rates  
- [ ] Real Photo badge  
- [ ] VIP badge  
- [ ] Right sidebar VIP random profiles  
- [ ] Bottom banner ads  

---

## 📝 Blogs Page

- [ ] Blog listing page  
- [ ] Featured image  
- [ ] Title  
- [ ] Description preview  
- [ ] Date  
- [ ] Tags  
- [ ] Single blog page  

---

## 📢 Classifieds

### Create Classified

- [ ] Wallet summary section  
- [ ] Form fields:
  - [ ] Title  
  - [ ] Category  
  - [ ] City/Neighborhood  
  - [ ] Featured image  
  - [ ] Description  
  - [ ] Gallery upload  
  - [ ] Show phone checkbox  
  - [ ] Show name checkbox  
  - [ ] Payment breakdown  
  - [ ] MPESA integration  

---

### Classified Dashboard

- [ ] Status counters:
  - [ ] Unpublished  
  - [ ] In moderation  
  - [ ] Approved  
  - [ ] Rejected  

- [ ] Posts table:
  - [ ] Date  
  - [ ] Title  
  - [ ] Amount  
  - [ ] Post status  
  - [ ] Payment gateway  
  - [ ] Payment status  
  - [ ] Action  

---

## 💰 Membership Page

### REGULAR
- 3 Days – 400 Ksh  
- 7 Days – 700 Ksh  
- 15 Days – 1,300 Ksh  
- 30 Days – 2,000 Ksh  
- Bottom listing placement  
- Upload up to 4 photos  

### PRIME
- 3 Days – 500 Ksh  
- 7 Days – 950 Ksh  
- 15 Days – 1,800 Ksh  
- 30 Days – 3,000 Ksh  
- Prime geo placement  
- Upload up to 5 photos  

### PRIME VIP
- 3 Days – 600 Ksh  
- 7 Days – 1,250 Ksh  
- 15 Days – 2,400 Ksh  
- 30 Days – 4,000 Ksh  
- Homepage + VIP geo placement  
- Upload up to 10 photos  

### VIP
- 3 Days – 900 Ksh  
- 7 Days – 1,450 Ksh  
- 15 Days – 2,800 Ksh  
- 30 Days – 5,000 Ksh  
- VIP top placement  
- Upload up to 10 photos  

- [ ] Membership purchase flow  

---

## 💳 Wallet System

- [ ] Wallet dashboard  
- [ ] Add funds page  
- [ ] MPESA integration  
- [ ] Transaction history  
- [ ] Auto-refresh after payment  

---

## 📸 Photo Verification Page

- [ ] Upload verification photo  
- [ ] Accepted criteria accordion  
- [ ] Rejected criteria accordion  
- [ ] Assign real badge  

---

## ⚙ Settings Page

- [ ] Profile activation toggle  
- [ ] Chat subscription toggle  
- [ ] Wallet overview  
- [ ] Inbox toggle  
- [ ] Visibility settings  
- [ ] Email notifications  
- [ ] Password update  

---

## 🤝 Partners Page

- [ ] Partner logo grid  
- [ ] Title  
- [ ] Description  
- [ ] External link navigation  

---

## 📨 Contact Page

- [ ] Contact information  
- [ ] Twitter icon  
- [ ] Working hours  
- [ ] Contact form  

---

# 🚀 Phase 4: Optimization

- [ ] Lazy loading optimization  
- [ ] Image compression  
- [ ] Video streaming optimization  
- [ ] SEO tags  
- [ ] Sitemap  
- [ ] Server-side pagination  
- [ ] Redis caching  

---

# 🐳 Phase 5: Docker & Deployment

- [ ] Dockerize backend  
- [ ] Dockerize frontend  
- [ ] Setup Docker Compose  
- [ ] Setup Nginx  
- [ ] Environment configs  
- [ ] Deploy to AWS  
- [ ] Deploy to GCP  
- [ ] Setup SSL  

---

# 🔐 Security Considerations

- Password hashing (bcrypt)  
- Rate limiting  
- Input validation  
- XSS protection  
- File upload validation  
- Secure payment verification  
- JWT expiration handling  

---

# 📈 Future Enhancements

- Real-time messaging (WebSockets)  
- Admin dashboard  
- Analytics dashboard  
- AI profile suggestions  
- Push notifications  
- Referral system  

---

# 🏁 Recommended Development Order

1. Backend API & Database  
2. Authentication  
3. Profile System  
4. Wallet & Payments  
5. Membership Logic  
6. Frontend Layout & Homepage  
7. Messaging System  
8. Classifieds & Blogs  
9. Optimization  
10. Docker & Deployment  
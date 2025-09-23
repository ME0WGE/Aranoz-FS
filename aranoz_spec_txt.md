# Aranoz Furniture Website - Full-Stack Development Specification

**Client:** James Valentin Deloy, CEO - Aranoz Group  
**Designer:** Hackashtoi, Lead UI designer  
**Developer:** Junior Full-Stack developer  
**Date:** September 2025  
_Simulation for studies purposes_

## Project Context & Vision

### Market Opportunity

Aranoz, a well-established furniture brand in the United Kingdom, is planning to expand internationally, with Belgium as one of its first new markets. Aranoz seeks to launch a localized e-commerce platform.

### Target Audience

Households, furniture enthusiasts, and individuals seeking quality furniture with modern online shopping convenience.

### Core Mission

Deliver a fully functional e-commerce platform that reflects Hackashtoi's sophisticated design aesthetic whilst providing advanced functionality.

## Functional Scope Overview

| Feature                 | Public Users | Registered Users | Admin/Staff Roles |
| ----------------------- | ------------ | ---------------- | ----------------- |
| Browse Products         | ✓            | ✓                | ✓                 |
| View Promotions         | ✓            | ✓                | ✓                 |
| Read Blog Posts         | ✓            | ✓                | ✓                 |
| Like Products           |              | ✓                | ✓                 |
| Shopping Cart           |              | ✓                | ✓                 |
| Order History           |              | ✓                | ✓                 |
| Product Management      |              |                  | ✓                 |
| Promotion Management    |              |                  | ✓                 |
| Blog Content Management |              |                  | ✓                 |

## Key Features Functionalities

### Images Auto Resizing

All images must be automatically resized and duplicated in the correct formats required for each section of the website. This ensures that, in every context of the site, images display in the proper size without relying solely on front-end adjustments (e.g., banner size, shop size, invoice size).

### Coupons

The owner specifically requested the ability to create percentage-based coupons that apply a discount to the total order. This feature must only be available to Webmaster and Admin roles.

### Blog Posts & Tags

To expand the community, the blog must support tags and categories (types).

-   Each blog post belongs to one type (e.g., Industry)
-   Each blog post can have multiple tags (e.g., business, furniture)
-   Users can comment on blog posts

### Like Products

In the dashboard, the Admin must be able to view how many times clients have "liked" a product. This will help identify which products are most anticipated and appreciated.

### Shopping Cart

The shopping cart should function primarily as a technical demonstration. The payment integration will be handled later by the payment team. Two options should be available in the current version: Checks and PayPal.

### Order History

The user should have access at least to his last order when go the order page. To be able to get info about one of his order, the user should be connected.

### Order Tracking

Users must have access to at least their most recent order in the Order History page. To view order details, the user must be logged in.

### Order Status & Emails

At every step of the purchase process, clients must be informed via email of their order progress. On the Aranoz platform, there are two main steps: Order Confirmed & Order Sent.

-   When a client makes a purchase, they receive a confirmation email with a unique order number
-   Using this number, the client can track the status of their order on the tracking page
-   All orders must appear in the dashboard for Agents and Admins
-   Click on validated to "confirm." Once validated another email is sent to the client including the updated status and a complete invoice
-   All emails must reflect the company's brand identity

## User Roles

-   **Public:** Browse products, view blog posts (no purchase, no comments)
-   **User:** Purchase products, comment on blog posts, track orders
-   **Admin:** Full access to all features and CRUDs, manage and promote users
-   **Community Manager (CM):** Create, update, and delete blog posts; create new tags
-   **Agent:** Access client orders, update order status to "sent," and communicate with clients by email if necessary (via the dashboard)
-   **Webmaster:** Add and update products, manage stock, modify contact details, and pin products so they appear in the homepage carousel

## Pages, Sections and UI

### Carousel

Automatically displays 4 random products. If a product is pinned by the Webmaster in the dashboard, it must be force-included in the carousel. Pinning explicitly means "display this product in the homepage carousel."

### Category Section

Shows 4 fixed categories of the website. Clicking a category opens the Shop page pre-filtered by that category.

### Awesome Section

Displays 2 pages of 8 random products (carousel-like navigation). Clicking a product redirects the user to the product detail page.

### Weekly Sale

-   Displays a 5-day countdown timer that resets to 5 days automatically when it reaches zero
-   Highlights one discounted product at random (works only with products already on discount)
-   The title reflects the discount, e.g., "Weekly Sale 4 Up to 60%"; the displayed product already has that discount applied
-   Includes an email input to send a 10% coupon to the submitted address (always sends a simple coupon email when a valid email is provided)

### Bestseller Section

Displays the best-selling products, based on sales count. The ranking must reflect real sales data.

### Newsletter

When a user submits their email, they receive a dynamic email listing all currently discounted products, with original price and discounted price. If there are 10 discounted products, the email includes all 10.

### Shop

Lists all products with pagination (9 per page). Left sidebar: filters (category, price, etc.). Top bar: search by category or product name.

### Blog Page

Displays all blog posts in card view, with a right sidebar containing:

-   Search input
-   Category filter
-   Recent posts (latest 4)
-   Tags (links that filter the same page by tag)
-   Newsletter signup (same behavior as the Newsletter feature)

Clicking a blog card opens the blog detail page.

### Contact

Dynamic map showing the store location: (Chau. de l'Espérance 304, 7390 Quaregnon). Contact form below the map, with official contact details displayed on the right side.

### Footer & Navbar

Follow the specifications provided in the videos and asset materials for this project (layout, links, branding).

### Error & Secure URL

-   Any invalid route must show a custom 404 page
-   Unauthorized access must show a custom "No Permission" page (for logged-in users)
-   Critical forbidden attempts from public views should redirect to the homepage to avoid common redirection issues

## Platform Features

### Customer Experience

-   Attractive homepage with carousels
-   Product listings and detailed views
-   Wishlist functionality (like)
-   Complete checkout process
-   Order tracking and history
-   Email confirmations and invoicing

### Community Engagement

Integrated blog section enabling customers to share experiences, discover design ideas, and engage with the Hackashtoi community through curated content.

## Technical Architecture

1. **Backend Framework:** Laravel - Robust PHP framework providing comprehensive backend functionality, API development, and database management
2. **Frontend Technology:** InertiaJS + React - Modern frontend stack enabling seamless single-page application experience with server-side routing
3. **Database & Storage:** MySQL + Laravel Local Storage - Reliable database management with local file storage for assets and automated email system for invoicing

## Design Philosophy

### Visual Identity

Sober, minimalist aesthetic reflecting Hackashtoi's sophisticated brand identity with subtle colour accents and clean typography.

-   Blue Aranoz: #ecfdff
-   Pink-red Aranoz: #ff3368
-   Full colorimetric panel

### User Interface

Clear typography hierarchy, generous white space, and intuitive navigation ensuring optimal user experience across all devices.

### Responsive Design

Modern, mobile-first approach ensuring seamless functionality across desktop, tablet, and mobile platforms.

## Project Timeline

1. **Days 1-3: Foundation** - Project setup, database design, authentication system, and core Laravel configuration
2. **Days 4-7: Core Development** - Homepage implementation, product catalogue, shopping cart functionality, and user dashboard development
3. **Days 8-11: Advanced Features** - Admin panel creation, blog system integration, email automation, and order management system
4. **Days 12-14: Polish & Final Presentation** - Testing, refinement, responsive design optimisation, and final presentation to the client

## Budget Breakdown (Simulation)

-   **Total simulated Project Budget:** €5,250 - Comprehensive full-stack development solution
-   **Daily Simulated Development Rate:** €350 - Junior full-stack developer expertise
-   **Development Days:** 15 - Intensive development sprint timeline

_Simulated on actual expected market price_

**Payment excluded:** Third-party payment integration not included in this version, focusing on core functionality delivery.

## Communication Protocol

1. **Weekly Progress Reports:** Comprehensive email updates every Friday to valentin@molengeek.com detailing development progress, milestones achieved, and upcoming priorities
2. **Business-Focused Communication:** All updates presented in clear business language with visual aids and screenshots, avoiding technical jargon. In English
3. **English-Only Documentation:** Complete project communication, documentation, and deliverables provided exclusively in English for international collaboration. A 3 pages PDF

## Next Steps & Contact

### Immediate Actions

-   Contract finalisation and project approval
-   Development environment setup
-   Initial wireframe review and approval
-   Weekly communication schedule confirmation

### Project Success Criteria

Delivery of fully functional e-commerce platform meeting all specified requirements within 15-day timeline and €5,250 (of simulated) budget.

**Ready to Begin:** This specification provides the foundation for creating Hackashtoi's premier online furniture shopping destination.

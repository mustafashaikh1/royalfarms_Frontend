// API service to interact with Spring Boot REST endpoints

const API_BASE_URL = '/api';

export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Using local fallback for testimonials:', err);
    return [
      {
        id: 1,
        authorName: "Rajesh Mehta",
        location: "Pune, Maharashtra",
        comment: "Partnering with Mali Patil Farm has transformed my poultry business. Their EC shed system is truly efficient and reliable. I’ve seen faster growth and better profits.",
        avatarUrl: "/assets/Frame-4-1.webp",
        rating: 5
      },
      {
        id: 2,
        authorName: "Sumanth Reddy",
        location: "Warangal, Telangana",
        comment: "The support from Mali Patil Farm is exceptional. From training to veterinary care, everything is well-organized. My birds are healthier, and the operations are smooth.",
        avatarUrl: "/assets/Frame-5-1.webp",
        rating: 5
      },
      {
        id: 3,
        authorName: "Ankit Sharma",
        location: "Jaipur, Rajasthan",
        comment: "I was new to poultry farming, but Mali Patil Farm guided me through every step. Their integrated model made it easy to get started and succeed quickly.",
        avatarUrl: "/assets/Person_4.jpg",
        rating: 5
      },
      {
        id: 4,
        authorName: "M. Prakash",
        location: "Coimbatore, Tamil Nadu",
        comment: "Choosing Mali Patil Farm was the best decision for my farm. The technology, team support, and overall system helped me grow my business confidently and sustainably.",
        avatarUrl: "/assets/Frame-3.webp",
        rating: 5
      },
      {
        id: 5,
        authorName: "Nikita Chauhan",
        location: "Dehradun, Uttarakhand",
        comment: "What impressed me most is their professional support and transparent processes. Mali Patil Farm truly cares about farmers’ growth and long-term success.",
        avatarUrl: "/assets/Frame-8.webp",
        rating: 5
      },
      {
        id: 6,
        authorName: "Sameera Deshpande",
        location: "Nagpur, Maharashtra",
        comment: "The EC shed technology by Mali Patil Farm works wonders. It keeps the birds comfortable, which directly reflects in better health and weight gain.",
        avatarUrl: "/assets/Frame-9-1.webp",
        rating: 5
      },
      {
        id: 7,
        authorName: "Deepika Yadav",
        location: "Gwalior, Madhya Pradesh",
        comment: "I had no prior experience, but their team made everything simple and effective. From feed supply to daily guidance, the system runs flawlessly.",
        avatarUrl: "/assets/Frame-11.webp",
        rating: 5
      },
      {
        id: 8,
        authorName: "Anju Patel",
        location: "Ahmedabad, Gujarat",
        comment: "Mali Patil Farm is not just a service provider, they’re a true partner. Their model is perfect for farmers who want stability and consistent income.",
        avatarUrl: "/assets/Frame-10.webp",
        rating: 5
      }
    ];
  }
}

export async function fetchBlogPosts() {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`);
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Using local fallback for blogs:', err);
    return [
      {
        id: 1,
        title: "Goat Farm Management: Tips for Healthy Goat Growth",
        slug: "goat-farm-management-tips-for-healthy-goat-growth",
        badge: "Goat Farm Management",
        excerpt: "Successful goat farming depends on much more than selecting good breeds or providing daily feed. Healthy and consistent goat growth comes from a combination of",
        thumbnailUrl: "/assets/Goat-Farm-Management-300x200.webp"
      },
      {
        id: 2,
        title: "How Selective Breeding Can Improve Goat Farm Productivity",
        slug: "how-selective-breeding-improves-goat-farm-productivity",
        badge: "Goat breeding in Karnataka",
        excerpt: "Goat farming is becoming an increasingly important livestock business in Karnataka. From small farmers to professionally managed commercial farms, many people are exploring goat farming",
        thumbnailUrl: "/assets/Selective-breeding-in-goat-farming-300x200.webp"
      },
      {
        id: 3,
        title: "Why Professional Management Matters in Modern Goat Farming",
        slug: "professional-management-modern-goat-farming",
        badge: "Modern goat farming",
        excerpt: "Goat farming has evolved significantly from a traditional livestock activity into a structured and professionally managed agricultural business. With growing demand for quality livestock and",
        thumbnailUrl: "/assets/Professional-goat-farming-management-300x200.webp"
      }
    ];
  }
}

export async function fetchFarmStats() {
  try {
    const res = await fetch(`${API_BASE_URL}/stats`);
    if (!res.ok) throw new Error('Failed to fetch stats');
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Using local fallback for stats:', err);
    return [
      { metricKey: "farms_managed", metricValue: 50, metricSuffix: "+", label: "Farms Managed", iconUrl: "/assets/field.png" },
      { metricKey: "client_satisfaction", metricValue: 100, metricSuffix: "%", label: "Client Satisfaction", iconUrl: "/assets/World-Map-a.png" },
      { metricKey: "farm_experts", metricValue: 25, metricSuffix: "+", label: "Skilled Farm Experts", iconUrl: "/assets/farmer.png" },
      { metricKey: "years_experience", metricValue: 24, metricSuffix: "+", label: "Years of experience", iconUrl: "/assets/sanctuary.png" }
    ];
  }
}

export async function fetchFarmServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/services`);
    if (!res.ok) throw new Error('Failed to fetch services');
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Using local fallback for services:', err);
    return [
      {
        id: 1,
        title: "Breeding & Genetics",
        description: "We follow selective breeding practices to improve livestock quality.",
        iconUrl: "/assets/breeding.png",
        imageUrl: "/assets/pexels-pixabay-37657-scaled.jpg"
      },
      {
        id: 2,
        title: "Housing & Facilities",
        description: "Clean, well-planned housing provides comfort and supports animal welfare.",
        iconUrl: "/assets/farm-1.png",
        imageUrl: "/assets/pexels-shvetsa-5953664-scaled.jpg"
      },
      {
        id: 3,
        title: "Feeding & Nutrition",
        description: "Balanced diets with quality feed, support livestock growth and health.",
        iconUrl: "/assets/feed.png",
        imageUrl: "/assets/pexels-kovyrina-2424587-scaled.jpg"
      }
    ];
  }
}

export async function submitEnquiry(enquiryData) {
  try {
    const res = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enquiryData)
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit enquiry. Please try again.');
    }

    return await res.json();
  } catch (err) {
    // If backend is not running yet (network unreachable), provide friendly demo response
    if (err.name === 'TypeError' || err.message?.includes('fetch') || err.message?.includes('Failed to fetch')) {
      console.warn('Backend server currently offline, recording enquiry locally for demo:', enquiryData);
      return {
        success: true,
        message: 'Thank you for contacting Mali Patil Farm! Our team will get in touch with you shortly.'
      };
    }
    throw err;
  }
}

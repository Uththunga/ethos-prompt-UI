const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration for placeholder images
const testimonialImages = [
  { filename: 'sarah-chen.jpg', name: 'Sarah Chen', size: '150x150' },
  { filename: 'marcus-rodriguez.jpg', name: 'Marcus Rodriguez', size: '150x150' }
];

const clientLogos = [
  { filename: 'techflow.png', name: 'TechFlow Solutions', size: '200x100' },
  { filename: 'growthlab.png', name: 'GrowthLab Marketing', size: '200x100' },
  { filename: 'medcare.png', name: 'MedCare Plus', size: '200x100' },
  { filename: 'retailmax.png', name: 'RetailMax', size: '200x100' },
  { filename: 'financefirst.png', name: 'FinanceFirst', size: '200x100' },
  { filename: 'edutech.png', name: 'EduTech Pro', size: '200x100' },
  { filename: 'retailchain.png', name: 'RetailChain', size: '200x100' },
  { filename: 'financehub.png', name: 'FinanceHub', size: '200x100' },
  { filename: 'foodiedelight.png', name: 'FoodieDelight', size: '200x100' },
  { filename: 'fitnesspro.png', name: 'FitnessPro', size: '200x100' },
  { filename: 'retailplus.png', name: 'RetailPlus', size: '200x100' },
  { filename: 'consultingedge.png', name: 'ConsultingEdge', size: '200x100' }
];

// Function to download image from placeholder service
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Generate placeholder URL
function generatePlaceholderUrl(text, size, type = 'avatar') {
  const encodedText = encodeURIComponent(text);
  const bgColor = type === 'avatar' ? '6366f1' : 'f3f4f6';
  const textColor = type === 'avatar' ? 'ffffff' : '374151';
  
  return `https://via.placeholder.com/${size}/${bgColor}/${textColor}?text=${encodedText}`;
}

// Main function to generate all placeholder images
async function generatePlaceholderImages() {
  console.log('Generating placeholder images...');
  
  // Create directories if they don't exist
  const testimonialsDir = path.join(__dirname, '../public/assets/images/testimonials');
  const clientsDir = path.join(__dirname, '../public/assets/images/clients');
  
  if (!fs.existsSync(testimonialsDir)) {
    fs.mkdirSync(testimonialsDir, { recursive: true });
  }
  
  if (!fs.existsSync(clientsDir)) {
    fs.mkdirSync(clientsDir, { recursive: true });
  }
  
  // Generate testimonial images
  console.log('Generating testimonial images...');
  for (const testimonial of testimonialImages) {
    const url = generatePlaceholderUrl(testimonial.name.split(' ').map(n => n[0]).join(''), testimonial.size, 'avatar');
    const filepath = path.join(testimonialsDir, testimonial.filename);
    
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Generated ${testimonial.filename}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${testimonial.filename}:`, error.message);
    }
  }
  
  // Generate client logo images
  console.log('Generating client logo images...');
  for (const client of clientLogos) {
    const url = generatePlaceholderUrl(client.name, client.size, 'logo');
    const filepath = path.join(clientsDir, client.filename);
    
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Generated ${client.filename}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${client.filename}:`, error.message);
    }
  }
  
  console.log('Placeholder image generation complete!');
}

// Run the script
if (require.main === module) {
  generatePlaceholderImages().catch(console.error);
}

module.exports = { generatePlaceholderImages };

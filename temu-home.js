// Clothing recommendation database with real images for kids and adults
const clothingDatabase = [
    // Kids' Casual Wear
    { id: 1, name: 'Fun T-Shirt', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['blue', 'red', 'yellow'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.8 },
    { id: 2, name: 'Cool Hoodie', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['gray', 'navy', 'pink'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'casual', rating: 4.9 },
    { id: 3, name: 'Play Jeans', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['blue', 'black', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.7 },
    { id: 4, name: 'Colorful Polo', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1618183479302-1abc8d78ea50?w=300&h=300&fit=crop', colors: ['red', 'green', 'yellow'], skinTones: ['any'], bodyType: 'any', season: 'spring', style: 'casual', rating: 4.6 },
    { id: 5, name: 'Comfy Shorts', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['blue', 'green', 'orange'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'casual', rating: 4.7 },
    { id: 6, name: 'Graphic Tee', category: 'kids-casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['white', 'black', 'purple'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.8 },
    
    // Kids' Sporty
    { id: 7, name: 'Sports Shorts', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['black', 'blue', 'neon'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'sporty', rating: 4.8 },
    { id: 8, name: 'Active Tank', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1522075782050-dbb8a36ba58d?w=300&h=300&fit=crop', colors: ['neon', 'black', 'white'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'sporty', rating: 4.7 },
    { id: 9, name: 'Gym Jacket', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['black', 'blue', 'pink'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.9 },
    { id: 10, name: 'Running Pants', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1506629082632-401d5e49ab0e?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'sporty', rating: 4.6 },
    { id: 11, name: 'Soccer Jersey', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=300&h=300&fit=crop', colors: ['red', 'blue', 'green'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.8 },
    { id: 12, name: 'Basketball Shorts', category: 'kids-sporty', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['orange', 'black', 'white'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.7 },
    
    // Kids' Accessories
    { id: 13, name: 'Fun Scarf', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', colors: ['all'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'any', rating: 4.6 },
    { id: 14, name: 'Cool Belt', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop', colors: ['black', 'brown', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'any', rating: 4.7 },
    { id: 15, name: 'Playful Necklace', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop', colors: ['gold', 'silver', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'fun', rating: 4.8 },
    { id: 16, name: 'Baseball Cap', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1621293954387-db3e15a37e72?w=300&h=300&fit=crop', colors: ['black', 'navy', 'red'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'casual', rating: 4.5 },
    { id: 17, name: 'Sunglasses', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', colors: ['black', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'cool', rating: 4.7 },
    { id: 18, name: 'Backpack', category: 'kids-accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', colors: ['blue', 'red', 'green'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.9 },
    
    // Kids' Party
    { id: 19, name: 'Party Dress', category: 'kids-party', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['pink', 'purple', 'gold'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'party', rating: 4.9 },
    { id: 20, name: 'Fancy Shirt', category: 'kids-party', image: 'https://images.unsplash.com/photo-1618183479302-1abc8d78ea50?w=300&h=300&fit=crop', colors: ['white', 'blue', 'red'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'party', rating: 4.8 },
    { id: 21, name: 'Sparkly Top', category: 'kids-party', image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', colors: ['silver', 'gold', 'rainbow'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'party', rating: 4.7 },
    { id: 22, name: 'Party Pants', category: 'kids-party', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['black', 'navy', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'party', rating: 4.6 },
    { id: 23, name: 'Birthday Outfit', category: 'kids-party', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['bright', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'party', rating: 4.8 },
    { id: 24, name: 'Holiday Dress', category: 'kids-party', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['red', 'green', 'gold'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'party', rating: 4.9 },
    
    // Kids' School
    { id: 25, name: 'School Uniform', category: 'kids-school', image: 'https://images.unsplash.com/photo-1618183479302-1abc8d78ea50?w=300&h=300&fit=crop', colors: ['white', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.7 },
    { id: 26, name: 'Classroom Tee', category: 'kids-school', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['blue', 'green', 'yellow'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.6 },
    { id: 27, name: 'Study Pants', category: 'kids-school', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['khaki', 'black', 'navy'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.8 },
    { id: 28, name: 'Art Smock', category: 'kids-school', image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', colors: ['white', 'colorful'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.5 },
    { id: 29, name: 'PE Shorts', category: 'kids-school', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['blue', 'red', 'black'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'school', rating: 4.7 },
    { id: 30, name: 'School Sweater', category: 'kids-school', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['navy', 'gray', 'green'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'school', rating: 4.8 },

    // Adult Casual Wear
    { id: 31, name: 'Classic T-Shirt', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['white', 'black', 'navy'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.7 },
    { id: 32, name: 'Casual Blouse', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', colors: ['white', 'cream', 'light blue'], skinTones: ['fair', 'medium'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.6 },
    { id: 33, name: 'Denim Jacket', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=300&fit=crop', colors: ['blue', 'black', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.8 },
    { id: 34, name: 'Chinos', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['khaki', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.7 },
    { id: 35, name: 'Sweater', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop', colors: ['gray', 'navy', 'burgundy'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'casual', rating: 4.8 },
    { id: 36, name: 'Casual Dress', category: 'adult-casual', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['black', 'navy', 'floral'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.6 },

    // Adult Formal Wear
    { id: 37, name: 'Business Suit', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.9 },
    { id: 38, name: 'Formal Shirt', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1618183479302-1abc8d78ea50?w=300&h=300&fit=crop', colors: ['white', 'light blue', 'pink'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.7 },
    { id: 39, name: 'Dress Pants', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['black', 'gray', 'navy'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.8 },
    { id: 40, name: 'Blazer', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.9 },
    { id: 41, name: 'Formal Dress', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['black', 'navy', 'emerald'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.9 },
    { id: 42, name: 'Tie', category: 'adult-formal', image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?w=300&h=300&fit=crop', colors: ['red', 'blue', 'patterned'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.6 },

    // Adult Sporty
    { id: 43, name: 'Running Shoes', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', colors: ['black', 'white', 'blue'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.8 },
    { id: 44, name: 'Athletic Shorts', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['any'], bodyType: 'athletic', season: 'summer', style: 'sporty', rating: 4.7 },
    { id: 45, name: 'Sports Bra', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', colors: ['black', 'pink', 'blue'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.6 },
    { id: 46, name: 'Gym Tank', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1522075782050-dbb8a36ba58d?w=300&h=300&fit=crop', colors: ['black', 'white', 'neon'], skinTones: ['any'], bodyType: 'athletic', season: 'summer', style: 'sporty', rating: 4.7 },
    { id: 47, name: 'Yoga Pants', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1506629082632-401d5e49ab0e?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.8 },
    { id: 48, name: 'Track Jacket', category: 'adult-sporty', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['black', 'blue', 'red'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'sporty', rating: 4.7 },

    // Adult Accessories
    { id: 49, name: 'Leather Belt', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop', colors: ['black', 'brown', 'tan'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'any', rating: 4.7 },
    { id: 50, name: 'Watch', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop', colors: ['silver', 'gold', 'black'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.8 },
    { id: 51, name: 'Elegant Scarf', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', colors: ['black', 'navy', 'burgundy'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'elegant', rating: 4.6 },
    { id: 52, name: 'Statement Necklace', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop', colors: ['gold', 'silver'], skinTones: ['fair', 'medium'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.8 },
    { id: 53, name: 'Briefcase', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', colors: ['black', 'brown'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'professional', rating: 4.7 },
    { id: 54, name: 'Sunglasses', category: 'adult-accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', colors: ['black', 'tortoise'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'casual', rating: 4.6 },
];

let userProfile = null;
let recommendedItems = [];
let currentCategory = 'all';
let userPhotoData = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fashion Finds initialized');
});

// Camera Functions
function openCamera() {
    const modal = document.getElementById('cameraModal');
    modal.classList.add('active');
    
    const video = document.getElementById('cameraVideo');
    navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' },
        audio: false 
    }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function(err) {
        alert('Unable to access camera: ' + err.message);
    });
}

function closeCamera() {
    const modal = document.getElementById('cameraModal');
    modal.classList.remove('active');
    
    const video = document.getElementById('cameraVideo');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}

function capturePhoto() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('captureCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    const photoData = canvas.toDataURL('image/jpeg');
    userPhotoData = photoData;
    
    // Stop video
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
    
    closeCamera();
    analyzePhoto(photoData);
}

function analyzePhoto(photoData) {
    // Display the captured photo
    const img = new Image();
    img.src = photoData;
    img.onload = function() {
        // Extract detailed color analysis from the photo
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        // Analyze the photo to determine skin tone and detailed features
        const userStyle = analyzeUserStyleDetailed(canvas);
        userProfile = userStyle;
        
        // Show analysis modal with detailed info
        showAnalysisDetailed(photoData, userStyle);
    };
}

function analyzeUserStyleDetailed(canvas) {
    // Detailed analysis based on image characteristics
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let avgR = 0, avgG = 0, avgB = 0;
    let pixelCount = data.length / 4;
    
    // Focus on upper region (likely face area)
    const upperRegionData = ctx.getImageData(0, 0, canvas.width, canvas.height / 2);
    const upperData = upperRegionData.data;
    let faceAvgR = 0, faceAvgG = 0, faceAvgB = 0;
    
    for (let i = 0; i < upperData.length; i += 4) {
        faceAvgR += upperData[i];
        faceAvgG += upperData[i + 1];
        faceAvgB += upperData[i + 2];
    }
    
    faceAvgR /= (upperData.length / 4);
    faceAvgG /= (upperData.length / 4);
    faceAvgB /= (upperData.length / 4);
    
    // Overall brightness
    for (let i = 0; i < data.length; i += 4) {
        avgR += data[i];
        avgG += data[i + 1];
        avgB += data[i + 2];
    }
    
    avgR /= pixelCount;
    avgG /= pixelCount;
    avgB /= pixelCount;
    
    // Determine detailed skin tone
    let skinTone = 'medium';
    let skinToneDescription = 'Medium complexion';
    let skinUndertone = 'neutral';
    let brightness = (faceAvgR + faceAvgG + faceAvgB) / 3;
    let overallBrightness = (avgR + avgG + avgB) / 3;
    
    // Skin tone classification with undertone
    if (brightness > 200) {
        skinTone = 'fair';
        skinToneDescription = 'Fair complexion';
        if (faceAvgR > faceAvgG && faceAvgR > faceAvgB) {
            skinUndertone = 'warm';
        } else if (faceAvgB > faceAvgR && faceAvgB > faceAvgG) {
            skinUndertone = 'cool';
        } else {
            skinUndertone = 'neutral';
        }
    } else if (brightness > 150) {
        skinTone = 'medium';
        skinToneDescription = 'Medium complexion';
        if (faceAvgR - faceAvgG > 10) {
            skinUndertone = 'warm';
        } else if (faceAvgG - faceAvgR > 10) {
            skinUndertone = 'cool';
        } else {
            skinUndertone = 'neutral';
        }
    } else {
        skinTone = 'dark';
        skinToneDescription = 'Deep complexion';
        if (faceAvgR > faceAvgG) {
            skinUndertone = 'warm';
        } else {
            skinUndertone = 'cool';
        }
    }
    
    // Detect lighting condition
    let lighting = 'natural';
    if (overallBrightness > 200) {
        lighting = 'bright';
    } else if (overallBrightness < 100) {
        lighting = 'low';
    }
    
    // Detect dress code from overall colors
    let dressCode = overallBrightness > 180 ? 'formal' : 'casual';
    
    // Determine color harmony
    let colorHarmony = getColorHarmony(faceAvgR, faceAvgG, faceAvgB);
    
    return {
        skinTone: skinTone,
        skinToneDescription: skinToneDescription,
        skinUndertone: skinUndertone,
        brightness: brightness,
        overallBrightness: overallBrightness,
        dressCode: dressCode,
        lighting: lighting,
        bodyType: 'any',
        season: getSeason(),
        colorPalette: getColorPalette(brightness),
        colorHarmony: colorHarmony,
        faceAvgR: Math.round(faceAvgR),
        faceAvgG: Math.round(faceAvgG),
        faceAvgB: Math.round(faceAvgB)
    };
}

function getColorHarmony(r, g, b) {
    const hues = [];
    
    // Simple color harmony detection
    if (r > g && r > b) {
        return 'warm tones'; // Red/warm dominant
    } else if (b > r && b > g) {
        return 'cool tones'; // Blue/cool dominant
    } else if (g > r && g > b) {
        return 'earthy tones'; // Green/earth dominant
    } else {
        return 'balanced tones';
    }
}

function getSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
}

function getColorPalette(brightness) {
    if (brightness > 180) {
        return ['white', 'cream', 'light colors'];
    } else if (brightness > 150) {
        return ['neutral', 'pastels', 'earth tones'];
    } else {
        return ['bold', 'dark', 'rich colors'];
    }
}

function showAnalysisDetailed(photoData, userStyle) {
    const modal = document.getElementById('analysisModal');
    document.getElementById('capturedPhoto').src = photoData;
    
    const profileDetails = document.getElementById('profileDetails');
    profileDetails.innerHTML = `
        <div class="detail-item">
            <span class="detail-label">Skin Tone</span>
            <span class="detail-value">${userStyle.skinTone}</span>
            <span class="detail-description">${userStyle.skinToneDescription}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Undertone</span>
            <span class="detail-value">${userStyle.skinUndertone}</span>
            <span class="detail-description">Color warmth characteristic</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Lighting</span>
            <span class="detail-value">${userStyle.lighting}</span>
            <span class="detail-description">Photo lighting condition</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Dress Code</span>
            <span class="detail-value">${userStyle.dressCode}</span>
            <span class="detail-description">Style preference detected</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Color Harmony</span>
            <span class="detail-value">${userStyle.colorHarmony}</span>
            <span class="detail-description">Your color profile</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Season</span>
            <span class="detail-value">${userStyle.season}</span>
            <span class="detail-description">Current season</span>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeAnalysis() {
    const modal = document.getElementById('analysisModal');
    modal.classList.remove('active');
}

function generateRecommendations() {
    if (!userProfile) {
        alert('Please take a photo first');
        return;
    }
    
    closeAnalysis();
    
    // Show loading state
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('productsGrid').style.display = 'none';
    document.getElementById('recommendationsSection').style.display = 'none';
    
    // Simulate API call
    setTimeout(() => {
        recommendedItems = getRecommendations(userProfile);
        displayRecommendations();
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('productsGrid').style.display = 'grid';
    }, 1500);
}

function getRecommendations(userProfile) {
    const recommendations = clothingDatabase.map(item => {
        let score = 0;
        
        // Skin tone compatibility
        if (item.skinTones.includes(userProfile.skinTone) || item.skinTones.includes('any')) {
            score += 30;
        }
        
        // Dress code compatibility
        if (item.style === userProfile.dressCode || item.style === 'casual') {
            score += 25;
        }
        
        // Season compatibility
        if (item.season === userProfile.season || item.season === 'all') {
            score += 20;
        }
        
        // Color palette compatibility
        if (item.colors.includes('all') || userProfile.colorPalette.some(c => 
            item.colors.some(color => color.toLowerCase().includes(c.toLowerCase())))) {
            score += 15;
        }
        
        // Base item rating
        score += item.rating * 2;
        
        return { ...item, matchScore: Math.round(score) };
    });
    
    // Sort by match score and return top 12
    return recommendations.sort((a, b) => b.matchScore - a.matchScore).slice(0, 12);
}

function displayRecommendations() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    recommendedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <div class="try-on-container">
                    <img src="${userPhotoData}" alt="Your photo" class="try-on-background">
                    <img src="${item.image}" alt="${item.name}" class="try-on-clothing">
                </div>
                <div class="recommendation-badge">✓ RECOMMENDED</div>
            </div>
            <div class="product-info">
                <div class="product-name">${item.name}</div>
                <div class="product-rating">⭐ ${item.rating} ✓ Match ${item.matchScore}%</div>
                <div class="match-score">Perfect for your style!</div>
                <div style="margin-top: 8px; font-size: 11px; color: #999;">
                    ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} • ${item.season}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter recommendations by category
    const filtered = category === 'all' 
        ? recommendedItems 
        : recommendedItems.filter(item => item.category === category);
    
    displayFilteredRecommendations(filtered);
}

function displayFilteredRecommendations(items) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px; color: #999;">No recommendations in this category</div>';
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <div class="try-on-container">
                    <img src="${userPhotoData}" alt="Your photo" class="try-on-background">
                    <img src="${item.image}" alt="${item.name}" class="try-on-clothing">
                </div>
                <div class="recommendation-badge">✓ RECOMMENDED</div>
            </div>
            <div class="product-info">
                <div class="product-name">${item.name}</div>
                <div class="product-rating">⭐ ${item.rating} ✓ Match ${item.matchScore}%</div>
                <div class="match-score">Perfect for your style!</div>
                <div style="margin-top: 8px; font-size: 11px; color: #999;">
                    ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} • ${item.season}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.closest('.tab').classList.add('active');
    
    if (tab === 'camera') {
        openCamera();
    } else if (tab === 'tips') {
        alert('Style Tips:\n\n• Wear colors that complement your skin tone\n• Match formal occasions with dress codes\n• Consider the weather when choosing outfits\n• Mix and match with accessories');
    } else if (tab === 'account') {
        alert('Account Features (Coming Soon)\n\n• Save favorite recommendations\n• View your style history\n• Get weekly style suggestions');
    }
}

function showAbout() {
    alert('StyleMatch - Your Personal Style Advisor\n\n📷 Take a selfie\n🔍 Get analyzed\n👔 Receive recommendations\n\nNo purchases needed - just style advice!');
}
// Fun Enhancements for Enjoyment
const funTips = [
    "💡 Pro tip: Earth tones look amazing on warm undertones!",
    "🎨 Fun fact: Your style is as unique as your fingerprint!",
    "🌟 Did you know? Colors can affect your mood - choose wisely!",
    "👑 Style secret: Accessories make any outfit 10x better!",
    "🎭 Mix it up! Try a color you never thought you'd wear!",
    "✨ Confidence is the best accessory you can wear!",
    "🎪 Fashion is art you can wear on your body!",
    "🌈 Your personal style tells your story to the world!",
    "👗 Every day is a fashion show and the world is your runway!",
    "🎨 Color psychology: Blue = trustworthy, Red = confident!"
];

let tipInterval;

// Start showing random tips periodically
function startFunTips() {
    tipInterval = setInterval(showRandomTip, 15000); // Every 15 seconds
}

// Stop tips when user interacts
function stopFunTips() {
    clearInterval(tipInterval);
}

function showRandomTip() {
    const tip = funTips[Math.floor(Math.random() * funTips.length)];
    showTipNotification(tip);
}

function showTipNotification(message) {
    // Remove existing tip
    const existingTip = document.querySelector('.fun-tip');
    if (existingTip) {
        existingTip.remove();
    }

    // Create new tip
    const tipDiv = document.createElement('div');
    tipDiv.className = 'fun-tip';
    tipDiv.textContent = message;
    document.body.appendChild(tipDiv);

    // Remove after 5 seconds
    setTimeout(() => {
        if (tipDiv.parentNode) {
            tipDiv.remove();
        }
    }, 5000);
}

// Celebration effect when recommendations are generated
function celebrateRecommendations() {
    createConfetti();
    showTipNotification("🎉 Amazing recommendations just for you!");
}

function createConfetti() {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.background = ['#ff6b35', '#f7931e', '#ffd23f', '#667eea', '#764ba2'][Math.floor(Math.random() * 5)];
        celebration.appendChild(confetti);
    }

    document.body.appendChild(celebration);

    setTimeout(() => {
        if (celebration.parentNode) {
            celebration.remove();
        }
    }, 4000);
}

// Enhanced gamification with more rewards
function enhancedGamification(action) {
    const rewards = {
        'photo': { emoji: '📸', message: 'Photo pro! +10 style points!', points: 10 },
        'recommendations': { emoji: '🎯', message: 'Style master! +25 fashion points!', points: 25 },
        'category': { emoji: '🏷️', message: 'Category explorer! +5 discovery points!', points: 5 },
        'favorite': { emoji: '❤️', message: 'Fashion favorite! +15 love points!', points: 15 }
    };

    if (rewards[action]) {
        showTipNotification(`${rewards[action].emoji} ${rewards[action].message}`);
        // Could add point system here
    }
}

// Add click effects to product cards
function addCardInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);

            // Add heart animation for favorites
            if (Math.random() > 0.7) { // 30% chance
                showTipNotification('💖 This outfit would look amazing on you!');
            }
        }
    });
}

// Initialize fun features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fashion Finds initialized with fun features!');
    startFunTips();
    addCardInteractions();

    // Add click tracking for gamification
    document.addEventListener('click', function(e) {
        if (e.target.closest('.category-btn')) {
            enhancedGamification('category');
        }
    });
});

// Enhanced photo capture with fun feedback
function capturePhoto() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('captureCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    const photoData = canvas.toDataURL('image/jpeg');
    userPhotoData = photoData;

    // Stop video
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }

    closeCamera();
    enhancedGamification('photo');
    analyzePhoto(photoData);
}

// Enhanced recommendations with celebration
function generateRecommendations() {
    if (!userProfile) {
        alert('Please take a photo first to get personalized recommendations! 📷');
        return;
    }

    closeAnalysis();

    // Show loading state
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('productsGrid').style.display = 'none';
    document.getElementById('recommendationsSection').style.display = 'none';

    // Simulate API call with fun messages
    const loadingMessages = [
        'Analyzing your style... 🎨',
        'Finding perfect matches... 👗',
        'Curating your fashion finds... ✨',
        'Almost ready for fashion magic! 🎉'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        const loadingText = document.querySelector('.loading');
        if (loadingText) {
            loadingText.textContent = loadingMessages[messageIndex % loadingMessages.length];
        }
        messageIndex++;
    }, 500);

    // Simulate API call
    setTimeout(() => {
        clearInterval(messageInterval);
        recommendedItems = getRecommendations(userProfile);
        displayRecommendations();
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('productsGrid').style.display = 'grid';
        celebrateRecommendations();
        enhancedGamification('recommendations');
    }, 2000);
}
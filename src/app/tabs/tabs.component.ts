import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  categories = ['All', 'Tool Gift', 'Multi','Activity','Family Battle','VIP'];
  selectedCategory = 'All';

  giftsAll = [
    { id: 1, name: 'tools', imageUrl: 'path_to_image_1', category: 'Tools', value: '50' },
    { id: 2, name: 'Fighting', imageUrl: 'path_to_image_2', category: 'Multi', value: '30' },
    { id: 3, name: '	Tool Gift', imageUrl: 'path_to_image_3', category: 'Activity', value: '20' },
    { id: 4, name: '	Gift Box', imageUrl: 'path_to_image_4', category: 'Family Battle', value: '10' },
    { id: 5, name: 'Jumping Gift', imageUrl: 'path_to_image_5', category: 'VIP', value: '15' },
    { id: 6, name: 'Adventure Gear', imageUrl: 'path_to_image_6', category: 'Adventure', value: '25' },
{ id: 7, name: 'Camping Essentials', imageUrl: 'path_to_image_7', category: 'Outdoor', value: '40' },
{ id: 8, name: 'Game Night Set', imageUrl: 'path_to_image_8', category: 'Tool Gift', value: '35' },
{ id: 9, name: 'Gourmet Cooking Kit', imageUrl: 'path_to_image_9', category: 'Food & Drink', value: '60' },
{ id: 10, name: 'Fitness Tracker', imageUrl: 'path_to_image_10', category: 'Health & Fitness', value: '70' },
{ id: 11, name: 'Art Supplies', imageUrl: 'path_to_image_11', category: 'Arts & Crafts', value: '20' },
{ id: 12, name: 'Self-care Package', imageUrl: 'path_to_image_12', category: 'VIP', value: '25' },
{ id: 13, name: 'Tech Gadgets', imageUrl: 'path_to_image_13', category: 'Multi', value: '55' },
{ id: 14, name: 'Pet Accessories', imageUrl: 'path_to_image_14', category: 'Activity', value: '15' },
{ id: 15, name: 'Books Bundle', imageUrl: 'path_to_image_15', category: 'Tool Gift', value: '30' },
{ id: 16, name: 'Music Instrument', imageUrl: 'path_to_image_16', category: 'Family Battle', value: '45' },
{ id: 17, name: 'Travel Essentials', imageUrl: 'path_to_image_17', category: 'VIP', value: '50' },
{ id: 18, name: 'Plant Collection', imageUrl: 'path_to_image_18', category: 'Home & Garden', value: '20' },
{ id: 19, name: 'DIY Kit', imageUrl: 'path_to_image_19', category: 'Crafting', value: '25' },
{ id: 20, name: 'Gourmet Coffee Set', imageUrl: 'path_to_image_20', category: 'Activity', value: '40' },


    // Add more gifts for different categories
  ];

  searchTerm: string = '';
  selectedCategoryGifts: any[] = [];

  changeCategory(category: string) {
    this.selectedCategory = category;
    this.filterGiftsByCategory();
  }

  searchGifts() {
    this.filterGiftsByCategory();
  }

  ngOnInit() {
    this.filterGiftsByCategory();
  }

  filterGiftsByCategory() {
    // Filter by category
    if (this.selectedCategory === 'All') {
      this.selectedCategoryGifts = this.giftsAll;
    } else {
      this.selectedCategoryGifts = this.giftsAll.filter(gift => gift.category === this.selectedCategory);
    }

    // Filter by search term
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const searchTermLower = this.searchTerm.trim().toLowerCase();
      this.selectedCategoryGifts = this.selectedCategoryGifts.filter(gift =>
        gift.name.toLowerCase().includes(searchTermLower) ||
        gift.category.toLowerCase().includes(searchTermLower) ||
        gift.value.toLowerCase().includes(searchTermLower)
      );
    }
  }
}

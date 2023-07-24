import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  categories = ['All', 'Appointment', 'Latto'];
  selectedCategory = 'All';

  giftsAll = [
    { id: 1, name: 'Gift 1', imageUrl: 'path_to_image_1', category: 'All', value: '$50' },
    { id: 2, name: 'Gift 2', imageUrl: 'path_to_image_2', category: 'All', value: '$30' },
    { id: 3, name: 'Gift 3', imageUrl: 'path_to_image_3', category: 'Appointment', value: '$20' },
    { id: 4, name: 'Gift 4', imageUrl: 'path_to_image_4', category: 'Appointment', value: '$10' },
    { id: 5, name: 'Gift 5', imageUrl: 'path_to_image_5', category: 'Latto', value: '$15' },
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

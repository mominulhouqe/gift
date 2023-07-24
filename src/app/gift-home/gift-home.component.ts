import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-gift-home',
  templateUrl: './gift-home.component.html',
  styleUrls: ['./gift-home.component.css']
})
export class GiftHomeComponent {
  @ViewChild('toast') toastElement!: ElementRef<HTMLDivElement>;
  gifts: Gift[] = [];
  newGift: string = '';

  ngOnInit() {
    // Retrieve gifts from local storage if available
    const savedGifts = localStorage.getItem('gifts');
    if (savedGifts) {
      this.gifts = JSON.parse(savedGifts);
    }
  }

  addGift() {
    if (this.newGift.trim() === '') {
      return;
    }
    const gift: Gift = { id: Date.now(), name: this.newGift };
    this.gifts.push(gift);
    this.newGift = '';

    // Save gifts to local storage
    localStorage.setItem('gifts', JSON.stringify(this.gifts));
  }

  deleteGift(gift: Gift) {
    this.gifts = this.gifts.filter(g => g.id !== gift.id);

    // Save updated gifts to local storage
    localStorage.setItem('gifts', JSON.stringify(this.gifts));

    // Show toast message
    this.showDeleteToast();
  }

  showDeleteToast() {
    const toast = this.toastElement.nativeElement;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

interface Gift {
  id: number;
  name: string;
}



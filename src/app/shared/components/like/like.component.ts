import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenerateUniqueIdService } from 'app/shared/services/generate-unique-id.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string = '';
  public fonts  = { faThumbsUp };

  constructor(private _service: GenerateUniqueIdService) {}

  public ngOnInit(): void {
    if (!this.id) {
      this.id = this._service.generateUniqueIdWithPrefix('like');
    }
  }

  public like(): void {
    this.liked.emit();
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: any;
  @Output() postDeleted = new EventEmitter();
  userId = localStorage.getItem('user')!;
  toggleLike: any;
  unFilledHeart: any = ['far', 'heart'];
  filledHeart: any = ['fas', 'heart']

  constructor(private servicePost: PostService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.checkUserLike();
  }

  delete(idtask: any) {
    this.servicePost.deletePost(idtask)
      .then(() => {
        this.onNotifyDeletedPost();
        this.toastr.success("Post borrado correctamente");
      })
      .catch(() => {
        this.toastr.error("No se ha podido borrar la publicación", "Error!")
      });
  }

  onNotifyDeletedPost() {
    this.postDeleted.emit({ task: this.post });
  }

  toggleLikeIcon(postId: any): void {
    // Añadir like
    if (this.toggleLike[0] === 'far') {
      this.addLike(postId);
    } else {
    // Quitar like
      this.deleteLike(postId);
    }
  }
  private addLike(postId: any) {
    this.servicePost.likesPosts(postId, { user_id: this.userId })
      .then((updatedPost) => {
        this.post = updatedPost;
        this.toggleLike = this.filledHeart;
      });

  }
  private deleteLike(postId: any) {
    this.servicePost.deletelike(postId, { user_id: this.userId })
      .then((updatedPost) => {
        this.post = updatedPost;
        this.toggleLike = this.unFilledHeart;
      });

  }
  checkUserLike() {
    this.post.likes.includes(this.userId) ? this.toggleLike = this.filledHeart : this.toggleLike = this.unFilledHeart;
  }

}

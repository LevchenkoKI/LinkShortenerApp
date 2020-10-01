import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CutLinkResponse } from './../../model/CutLinkResponse';
import { CutLinkRequest } from './../../model/CutLinkRequest';
import { TransportService } from './../../services/transport.service';


@Component({
  selector: 'app-short-link',
  templateUrl: './short-link.component.html',
  styleUrls: ['./short-link.component.scss'],
})
export class ShortLinkComponent implements OnInit {

  public linkFormControl: FormControl;
  public cutLink = '';
  public loading = false;

  constructor(private transport: TransportService) {
    
    this.linkFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
      ),
    ]);
  }

  ngOnInit(): void {}
  
  public generateShortLink() {
    
    this.loading = true;
   
    const request = new CutLinkRequest();
    request.fullLink = this.hasEnteredLinkHttp? this.linkFormControl.value: `http://${this.linkFormControl.value}`;
    
    this.transport.sendPost<CutLinkResponse>('link/cutLink', request).then(response => {
        this.cutLink = `${location.href}${response.shortLink}`;
        }).catch((error) => {
          window.alert(`Ошибка при генереции короткой ссылки: ${error.message}`)
          console.log(error);
        }).finally(() => {
          this.loading = false;
        });
  }

  private get hasEnteredLinkHttp(): boolean {
    return (
      this.linkFormControl &&
      this.linkFormControl.value &&
      (this.linkFormControl.value.includes('http://') ||
        this.linkFormControl.value.includes('https://'))
    );
  }
}

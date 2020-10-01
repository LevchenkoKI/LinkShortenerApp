import { GetFullLinkRequest } from './../../model/GetFullLinkRequest';
import { GetFullLinkResponse } from './../../model/GetFullLinkResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransportService } from 'src/app/services/transport.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-full-link',
  templateUrl: './full-link.component.html',
  styleUrls: ['./full-link.component.scss']
})
export class FullLinkComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private transport: TransportService) { }

  ngOnInit(): void {
    
    const request = new GetFullLinkRequest();
    request.shortLink = this.activatedRoute.snapshot.paramMap.get("shortLink");

    this.transport.sendPost<GetFullLinkResponse>("link/getFullLink", request).then(response => {
        window.location.href = response.fullLink;
      }).catch((response:HttpErrorResponse) => {
        window.alert(`Ошибка при получении ссылки: ${response.message}`)
        console.log(response);
      });
  }

}

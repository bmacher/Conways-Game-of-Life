import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { FieldManager} from '../../services/field-manager.service';

@Component({
  selector: 'app-conways-field',
  templateUrl: './conways-field.component.html',
  styleUrls: ['./conways-field.component.css']
})
export class ConwaysFieldComponent implements OnInit {
  fieldSize: number;

  constructor(
    private route: ActivatedRoute,
    private fieldManager: FieldManager ) {
    // check, if field size is set
    if (this.route.snapshot.paramMap.get('fieldsize') != null) {
      // extract field size from URL
      this.fieldSize = +this.route.snapshot.paramMap.get('fieldsize');

      // create field
      fieldManager.createField(this.fieldSize);
    } else {
      // APPEND ERROR HANDLER
    }
  }

  ngOnInit() { }
}

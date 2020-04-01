import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-raid-bosses-table',
  templateUrl: './raid-bosses-table.component.html',
  styleUrls: ['./raid-bosses-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaidBossesTableComponent implements OnInit {

  wings = [
    {
      name: 'W1',
      bosses: [
        {
          name: 'Vale Guardian',
          done: false,
        },
        {
          name: 'Gorseval the Multifarious',
          done: false,
        },
        {
          name: 'Sabetha the Saboteur',
          done: false,
        },
      ],
    },
    {
      name: 'W2',
      bosses: [
        {
          name: 'Slothasor',
          done: false,
        },
        {
          name: 'Prison Camp',
          done: false,
        },
        {
          name: 'Matthias Gabriel',
          done: false,
        },
      ],
    },
    {
      name: 'W3',
      bosses: [
        {
          name: 'Siege the Stronghold',
          done: false,
        },
        {
          name: 'Keep Construct',
          done: false,
        },
        {
          name: 'Twisted Castle',
          done: false,
        },
        {
          name: 'Xera',
        },
      ],
    },
  ]

  borders = []

  constructor() {
  }

  ngOnInit(): void {
    this.calculateBorders()
  }

  onStatusChange(wingIndex, bossIndex) {
    const boss = this.wings[wingIndex].bosses[bossIndex]
    boss.done = !boss.done
  }

  private calculateBorders() {
    const bossesCount = this.wings
      .map(wing => wing.bosses.length)
      .reduce(((previousValue, currentValue) => {
        const style = {
          'grid-row-start': 1 + previousValue,
          'grid-row-end': 1 + previousValue + currentValue,
        }
        this.borders.push(style)
        return previousValue + currentValue
      }), 0)
    console.log(this.borders, 'bc')
  }

}

import * as Rocket from '../../rocket/index.js';
import Navigation from '../../rocket/components/Navigation.js';
import routes from './routes.js';

export default () => [
  Rocket.createElement(
    Navigation,
    {
      routes,
      activeIndex: 0
    },
    null
  ),
  Rocket.createElement(
    'section',
    null,
    Rocket.createElement(
      'div',
      null,
      [
        Rocket.createElement(
          'h1',
          null,
          'Lorem ipsum'
        ),
        Rocket.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor lacus quis luctus sodales. Duis in eros commodo, commodo augue sit amet, cursus dolor. Aenean ut lacus gravida, accumsan dolor ut, tempor lacus. Donec libero nisi, suscipit a convallis quis, iaculis sed ex. Quisque eu finibus nulla, in sollicitudin leo. Donec vitae augue commodo, elementum purus eget, fringilla dui. Pellentesque pellentesque sit amet enim non finibus. Duis vulputate ligula varius enim interdum sagittis. In et fermentum eros. Quisque justo lorem, facilisis eget scelerisque fringilla, ultricies sed mi. Nulla commodo sed libero cursus vehicula. In hac habitasse platea dictumst. Nam facilisis dolor id ligula volutpat efficitur. Mauris ut leo dui. Integer suscipit quam non justo volutpat, in facilisis libero ullamcorper. Etiam tellus tortor, accumsan at ipsum non, sollicitudin laoreet nulla.'
        ),
        Rocket.createElement(
          'p',
          null,
          'Aliquam vel eros feugiat, finibus nisi ut, lobortis dui. Ut bibendum condimentum dolor, ut fringilla nulla ultrices et. Phasellus cursus turpis eu nunc venenatis auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacinia massa quis eros egestas, at rhoncus lectus lacinia. Nulla facilisi. Donec quis risus nec ante porta feugiat. Nunc convallis metus ac nulla accumsan, in dapibus orci vestibulum. Aenean vel diam libero. Donec elementum quam eget mauris vulputate malesuada. Duis congue sodales urna, vitae pellentesque velit egestas ut. Nunc pulvinar molestie diam, ut malesuada eros maximus iaculis. Nullam ante leo, tempus quis tellus quis, accumsan accumsan libero.'
        ),
        Rocket.createElement(
          'p',
          null,
          'Duis non pellentesque elit, ac aliquam quam. Vivamus non justo eget mi laoreet facilisis ut id nisi. In odio metus, eleifend in leo ut, venenatis imperdiet dolor. Vivamus ante felis, sodales eget malesuada id, lacinia id enim. Sed sapien eros, facilisis id commodo vel, luctus nec libero. Suspendisse quis vulputate mi. Suspendisse ut dignissim neque. In velit risus, viverra at purus at, efficitur posuere orci. Nunc suscipit, purus et sagittis bibendum, odio magna interdum diam, eget mollis enim turpis ut sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        ),
        Rocket.createElement(
          'p',
          null,
          'Donec tristique egestas purus, sed mollis lacus interdum vel. Suspendisse turpis enim, ullamcorper et lectus eu, porttitor sollicitudin velit. Ut a elit urna. Integer nulla sapien, ultrices in est vel, molestie tempus purus. Donec a lacus vitae velit consectetur efficitur ac vel lectus. Phasellus vel dolor in libero tincidunt porta a eget diam. Vivamus est lectus, aliquet nec libero non, aliquet scelerisque felis. In sit amet rutrum arcu. Maecenas et augue a sapien faucibus rhoncus.'
        ),
        Rocket.createElement(
          'p',
          null,
          'Fusce sit amet lobortis quam. Sed egestas, urna quis pretium dignissim, augue turpis cursus nisl, eu tempus velit dui quis est. Suspendisse scelerisque laoreet imperdiet. Mauris vel libero nisi. Sed vel odio accumsan, ultrices tellus eu, semper urna. Mauris malesuada lorem nec consectetur finibus. Vivamus vitae orci placerat quam fermentum mollis feugiat eu orci. Sed at nulla laoreet, pretium eros id, sollicitudin nisl. Maecenas aliquam quam ante, sed luctus odio dignissim sit amet. Vestibulum euismod facilisis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. In varius turpis ligula, et sodales ligula porttitor vitae.'
        )
      ]
    )
  )
];

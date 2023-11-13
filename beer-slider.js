// BA SLIDER
  window.onload = function () {
    setTimeout(function () {
    $('.ba_image-wrapper').each(function (index, el) {
        let firstImage = $(this).find('img')[0].src;
        let secondImage =$(this).find('img')[1].src;
        let template = `
      	<div class="beer-slider" data-beer-label="after">
          <img src="${firstImage}" alt="after image">
          <div class="beer-reveal" data-beer-label="before">
            <img src="${secondImage}" alt="before image">
          </div>
        </div>
      `;
       $(this).find('img')[1].remove();
       $(this).find('img')[0].remove();
      $(this).append(template);
        $.fn.BeerSlider = function (options) {
          options = options || {};
          return this.each(function () {
            new BeerSlider(this, options);
          });
        };
      });

      $(".beer-slider").each(function (index, el) {
        $(el).BeerSlider({ start: $(el).data("start") })
      });
    })
  }

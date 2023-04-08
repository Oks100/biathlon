$(document).ready(function(){
  $('.target-plus-1, .percent-plus-1').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-1'))
      $('.target-1').addClass('hide-on-target');
      });
  });

$(document).ready(function(){
  $('.target-minus-1').click(function () {
      $('.target-1').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-1');
      });
  });

$(document).ready(function(){
  $('.target-1 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-1").addClass('plus-hover-1');
      }, function() {
          $(".target-1").removeClass('plus-hover-1');
      }
  );
  });



$(document).ready(function(){
  $('.target-plus-2, .percent-plus-2').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-2'))
      $('.target-2').addClass('hide-on-target');
      $('.target-2').addClass('hide-on-plus');
      });
  });
  
$(document).ready(function(){
  $('.target-minus-2').click(function () {
      $('.target-2').addClass('hide-miss');
      $('.target-2').addClass('hide-on-minus');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-2');
      });
  });

$(document).ready(function(){
  $('.target-2 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-2").addClass('plus-hover-2');
      }, function() {
          $(".target-2").removeClass('plus-hover-2');
      }
  );
  });




$(document).ready(function(){
  $('.target-plus-3, .percent-plus-3').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-3'))
      $('.target-3').addClass('hide-on-target');
      });
  });
      
$(document).ready(function(){
  $('.target-minus-3').click(function () {
      $('.target-3').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-3');
      });
  });

$(document).ready(function(){
  $('.target-3 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-3").addClass('plus-hover-3');
      }, function() {
          $(".target-3").removeClass('plus-hover-3');
      }
  );
  });



$(document).ready(function(){
  $('.target-plus-5, .percent-plus-5').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-5'))
      $('.target-5').addClass('hide-on-target');
      });
  });
  
$(document).ready(function(){
  $('.target-minus-5').click(function () {
      $('.target-5').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-5');
      });
  });
  
$(document).ready(function(){
  $('.target-5 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-5").addClass('plus-hover-5');
      }, function() {
          $(".target-5").removeClass('plus-hover-5');
      }
  );
  });


  $(document).ready(function(){
    $('.target-plus-6, .percent-plus-6').click(function () {
        if($(".timeline__item-comments-target-percent").hasClass('percent-plus-6'))
        $('.target-6').addClass('hide-on-target');
        });
    });
        
  $(document).ready(function(){
    $('.target-minus-6').click(function () {
        $('.target-6').addClass('hide-miss');
        $('.timeline__item-comments-target-percent').removeClass('percent-plus-6');
        });
    });
  
  $(document).ready(function(){
    $('.target-6 .timeline__item-comments-target-percent').hover(
        function() {
            $(".target-6").addClass('plus-hover-6');
        }, function() {
            $(".target-6").removeClass('plus-hover-6');
        }
    );
    });





    $(document).ready(function(){
      $('.target-plus-7, .percent-plus-7').click(function () {
          if($(".timeline__item-comments-target-percent").hasClass('percent-plus-7'))
          $('.target-7').addClass('hide-on-target');
          });
      });
          
    $(document).ready(function(){
      $('.target-minus-7').click(function () {
          $('.target-7').addClass('hide-miss');
          $('.timeline__item-comments-target-percent').removeClass('percent-plus-7');
          });
      });
    
    $(document).ready(function(){
      $('.target-7 .timeline__item-comments-target-percent').hover(
          function() {
              $(".target-7").addClass('plus-hover-7');
          }, function() {
              $(".target-7").removeClass('plus-hover-7');
          }
      );
      });

      let copyText32 = document.querySelector(".ip-info32");
      copyText32.querySelector("button").addEventListener("click", function () {
        let input = copyText32.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText32.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText32.classList.remove("active");
        }, 2500);
      });

      let copyText31 = document.querySelector(".ip-info31");
      copyText31.querySelector("button").addEventListener("click", function () {
        let input = copyText31.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText31.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText31.classList.remove("active");
        }, 2500);
      });

      let copyText30 = document.querySelector(".ip-info30");
      copyText30.querySelector("button").addEventListener("click", function () {
        let input = copyText30.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText30.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText30.classList.remove("active");
        }, 2500);
      });

      let copyText29 = document.querySelector(".ip-info29");
      copyText29.querySelector("button").addEventListener("click", function () {
        let input = copyText29.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText29.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText29.classList.remove("active");
        }, 2500);
      });

      let copyText28 = document.querySelector(".ip-info28");
      copyText28.querySelector("button").addEventListener("click", function () {
        let input = copyText28.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText28.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText28.classList.remove("active");
        }, 2500);
      });

      let copyText27 = document.querySelector(".ip-info27");
      copyText27.querySelector("button").addEventListener("click", function () {
        let input = copyText27.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText27.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText27.classList.remove("active");
        }, 2500);
      });

      let copyText26 = document.querySelector(".ip-info26");
      copyText26.querySelector("button").addEventListener("click", function () {
        let input = copyText26.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText26.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText26.classList.remove("active");
        }, 2500);
      });

      let copyText25 = document.querySelector(".ip-info25");
      copyText25.querySelector("button").addEventListener("click", function () {
        let input = copyText25.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText25.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText25.classList.remove("active");
        }, 2500);
      });

      let copyText24 = document.querySelector(".ip-info24");
      copyText24.querySelector("button").addEventListener("click", function () {
        let input = copyText24.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText24.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText24.classList.remove("active");
        }, 2500);
      });

      let copyText23 = document.querySelector(".ip-info23");
      copyText23.querySelector("button").addEventListener("click", function () {
        let input = copyText23.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText23.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText23.classList.remove("active");
        }, 2500);
      });

      let copyText22 = document.querySelector(".ip-info22");
      copyText22.querySelector("button").addEventListener("click", function () {
        let input = copyText22.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText22.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText22.classList.remove("active");
        }, 2500);
      });


      let copyText21 = document.querySelector(".ip-info21");
      copyText21.querySelector("button").addEventListener("click", function () {
        let input = copyText21.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText21.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText21.classList.remove("active");
        }, 2500);
      });

      let copyText20 = document.querySelector(".ip-info20");
      copyText20.querySelector("button").addEventListener("click", function () {
        let input = copyText20.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText20.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText20.classList.remove("active");
        }, 2500);
      });

      let copyText19 = document.querySelector(".ip-info19");
      copyText19.querySelector("button").addEventListener("click", function () {
        let input = copyText19.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText19.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText19.classList.remove("active");
        }, 2500);
      });

      let copyText18 = document.querySelector(".ip-info18");
      copyText18.querySelector("button").addEventListener("click", function () {
        let input = copyText18.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText18.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText18.classList.remove("active");
        }, 2500);
      });

      let copyText17 = document.querySelector(".ip-info17");
      copyText17.querySelector("button").addEventListener("click", function () {
        let input = copyText17.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText17.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText17.classList.remove("active");
        }, 2500);
      });

      let copyText16 = document.querySelector(".ip-info16");
      copyText16.querySelector("button").addEventListener("click", function () {
        let input = copyText16.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText16.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText16.classList.remove("active");
        }, 2500);
      });

      let copyText15 = document.querySelector(".ip-info15");
      copyText15.querySelector("button").addEventListener("click", function () {
        let input = copyText15.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText15.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText15.classList.remove("active");
        }, 2500);
      });

      let copyText14 = document.querySelector(".ip-info14");
      copyText14.querySelector("button").addEventListener("click", function () {
        let input = copyText14.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText14.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText14.classList.remove("active");
        }, 2500);
      });

      let copyText13 = document.querySelector(".ip-info13");
      copyText13.querySelector("button").addEventListener("click", function () {
        let input = copyText13.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText13.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText13.classList.remove("active");
        }, 2500);
      });

      let copyText12 = document.querySelector(".ip-info12");
      copyText12.querySelector("button").addEventListener("click", function () {
        let input = copyText12.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText12.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText12.classList.remove("active");
        }, 2500);
      });

      let copyText11 = document.querySelector(".ip-info11");
      copyText11.querySelector("button").addEventListener("click", function () {
        let input = copyText11.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText11.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText11.classList.remove("active");
        }, 2500);
      });


      let copyText10 = document.querySelector(".ip-info10");
      copyText10.querySelector("button").addEventListener("click", function () {
        let input = copyText10.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText10.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText10.classList.remove("active");
        }, 2500);
      });

      let copyText9 = document.querySelector(".ip-info9");
      copyText9.querySelector("button").addEventListener("click", function () {
        let input = copyText9.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText9.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText9.classList.remove("active");
        }, 2500);
      });

      let copyText8 = document.querySelector(".ip-info8");
      copyText8.querySelector("button").addEventListener("click", function () {
        let input = copyText8.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText8.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText8.classList.remove("active");
        }, 2500);
      });

      let copyText7 = document.querySelector(".ip-info7");
      copyText7.querySelector("button").addEventListener("click", function () {
        let input = copyText7.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText7.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText7.classList.remove("active");
        }, 2500);
      });

      let copyText6 = document.querySelector(".ip-info6");
      copyText6.querySelector("button").addEventListener("click", function () {
        let input = copyText6.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText6.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText6.classList.remove("active");
        }, 2500);
      });

      let copyText5 = document.querySelector(".ip-info5");
      copyText5.querySelector("button").addEventListener("click", function () {
        let input = copyText5.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText5.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText5.classList.remove("active");
        }, 2500);
      });

      let copyText4 = document.querySelector(".ip-info4");
      copyText4.querySelector("button").addEventListener("click", function () {
        let input = copyText4.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText4.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText4.classList.remove("active");
        }, 2500);
      });

      let copyText3 = document.querySelector(".ip-info3");
      copyText3.querySelector("button").addEventListener("click", function () {
        let input = copyText3.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText3.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText3.classList.remove("active");
        }, 2500);
      });

      let copyText2 = document.querySelector(".ip-info2");
      copyText2.querySelector("button").addEventListener("click", function () {
        let input = copyText2.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText2.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText2.classList.remove("active");
        }, 2500);
      });

      let copyText1 = document.querySelector(".ip-info1");
      copyText1.querySelector("button").addEventListener("click", function () {
        let input = copyText1.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText1.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText1.classList.remove("active");
        }, 2500);
      });



      $(document).ready(function(){
        $('.timeline__item-comments-more-comments').click(function () {
            $('.timeline__item-comments-more-comments').addClass('hide');
            $('.timeline__item-comments-discussion').removeClass('hide');
            });
        });



    //   $(document).on("mousedown", "[data-bbcode]", function() {
    //     var editor = $("." + $(this).parent(".btn-group").parent(".editor-buttons").attr("data-parent"));
    //     var str = $(editor).val();
    //     var selection = getInputSelection($(editor));
    //     if (selection.length > 0) {
    //         $(editor).val(str.replace(selection, "[" + $(this).attr("data-bbcode") + "]" + selection + "[/" + $(this).attr("data-bbcode") + "]"));
    //     } else {
    //         $(editor).val(str + "[" + $(this).attr("data-bbcode") + "]" + "[/" + $(this).attr("data-bbcode") + "]");
    //     }
    // });
    // $(document).ready(function() {
    //     var editors = $("[data-editor]");
    //     $(editors).each(function(i, el) {
    //         var buttons = '<div class="editor-buttons btn-toolbar" data-parent="editor-' + i + '"><div class="btn-group mr-2"><button type="button" class="btn btn-dark" data-bbcode="b"><i class="fa fa-bold"></i></button><button type="button" class="btn btn-dark" data-bbcode="i"><i class="fa fa-italic"></i></button><button type="button" class="btn btn-dark" data-bbcode="u"><i class="fa fa-underline"></i></button></div><div class="btn-group mr-2"><button type="button" class="btn btn-dark" data-bbcode="quote"><i class="fa fa-quote-left"></i></button></div></div>';
    //         $(el).before(buttons);
    //         $(el).addClass("editor-" + i);
    //     });
    // });
    
    // function getInputSelection(elem) {
    //     if (typeof elem != "undefined") {
    //         s = elem[0].selectionStart;
    //         e = elem[0].selectionEnd;
    //         return elem.val().substring(s, e);
    //     } else {
    //         return '';
    //     }
    // }


  //   $(document).on("mousedown", "[data-bbcode]", function() {
  //     var editor = $("." + $(this).parent(".btn-group").parent(".editor-buttons").attr("data-parent"));
  //     var str = $(editor).val();
  //     var selection = getInputSelection($(editor));
  //     if (selection.length > 0) {
  //         $(editor).val(str.replace(selection, "[" + $(this).attr("data-bbcode") + "]" + selection + "[/" + $(this).attr("data-bbcode") + "]"));
  //     } else {
  //         $(editor).val(str + "[" + $(this).attr("data-bbcode") + "]" + "[/" + $(this).attr("data-bbcode") + "]");
  //     }
  // });
  // $(document).ready(function() {
  //     var editors = $("[data-editor]");
  //     $(editors).each(function(i, el) {
  //         var buttons = '<div class="editor-buttons btn-toolbar" data-parent="editor-' + i + '"><div class="bb-buttons-group"><button type="button" class="bb-button" data-bbcode="b" title="Жирный"><i class="b-code"></i></button><button type="button" class="bb-button" data-bbcode="i" title="Курсив"><i class="i-code"></i></button><button type="button" class="bb-button" data-bbcode="u" title="Подчеркнутый"><i class="u-code"></i><button type="button" class="bb-button" data-bbcode="blockquote" title="Цитата"><i class="blockquote-code"></i></button><button type="button" class="bb-button" data-bbcode="s" title="Перечеркнутый"><i class="s-code"></i></button><button type="button" class="bb-button" data-bbcode="url" title="Ссылка"><i class="url-code"></i></button><button type="button" class="bb-button" data-bbcode="spoiler" title="Спойлер"><i class="spoiler-code"></i></button></div></div>';
  //         $(el).before(buttons);
  //         $(el).addClass("editor-" + i);
  //     });
  // });
  
  // function getInputSelection(elem) {
  //     if (typeof elem != "undefined") {
  //         s = elem[0].selectionStart;
  //         e = elem[0].selectionEnd;
  //         return elem.val().substring(s, e);
  //     } else {
  //         return '';
  //     }
  // }


// function getInputSelection(elem) {
//     if (typeof elem != "undefined") {
//         s = elem[0].selectionStart;
//         e = elem[0].selectionEnd;
//         return elem.val().substring(s, e);
//     } else {
//         return '';
//     }
// }



/* Форма ввода комментария*/

let textarea = document.querySelector("#text-field");
class ToolbarElement {
  constructor(title, description) {
    this.title = title; //what shows in the toolbar
    this.description = description; //tooltip
    addElementToToolbar(this);
  }
}
class GenericStaticElement extends ToolbarElement {
  constructor(title, description, tag) {
    super(title, description);
    this.tag = tag; //[tag][/tag]
  }

  //Adds a tag in the text.
  activate(input) {
    let selected = getSelectedText(input);
    let wrapped = `[${this.tag}]`;
    input.value = selected.before + wrapped + selected.centre + selected.after;
  }
}
class GenericElement extends GenericStaticElement {
  constructor(title, description, tag) {
    super(title, description, tag);
  }

  //Wraps the input in the chosen tags.
  activate(input) {
    let selected = getSelectedText(input);
    let wrapped = `[${this.tag}]${selected.centre}[/${this.tag}]`;
    input.value = selected.before + wrapped + selected.after;
  }
}

//Top-level class for popups.
class PopupElement {
  constructor(title, description, tag) {
    this.title = title;
    this.description = description;
    this.tag = tag;
    addElementToToolbar(this);
  }
  activate(input) {
    //Generate all the popup elements.
    let popup = document.createElement("div");
    popup.classList.add("popup");
    document.querySelector(".timeline__item-comments-write-textarea-content").appendChild(popup);
    let popupTitleContainer = document.createElement("div");
    popupTitleContainer.classList.add("title");
    popup.appendChild(popupTitleContainer);
    let popupTitle = document.createElement("h3");
    popupTitle.textContent = this.description;
    popupTitleContainer.appendChild(popupTitle);
    let popupClose = document.createElement("span");
    popupClose.textContent = "";
    popupTitleContainer.appendChild(popupClose);
    popupClose.addEventListener("click", this.close);
    let popupContent = document.createElement("div");
    popupContent.classList.add("content");
    popup.appendChild(popupContent);
    let popupForm = document.createElement("form");
    popupContent.appendChild(popupForm);
    let popupSubmitButton = document.createElement("input");
    popupSubmitButton.setAttribute("type", "submit");
    popupSubmitButton.setAttribute("value", "Подтвердить");
    popupForm.appendChild(popupSubmitButton);

    //Show the popup.
    popup.style.display = "flex";

    //Return object.
    let obj = {
      popup: popup,
      popupTitleContainer: popupTitleContainer,
      popupTitle: popupTitle,
      popupClose: popupClose,
      popupContent: popupContent,
      popupForm: popupForm,
      popupSubmitButton: popupSubmitButton
    };
    return obj;
  }
  close() {
    //Close the popup.
    let wrapper = document.querySelector(".timeline__item-comments-write-textarea-content");
    let popup = document.querySelector(".popup");
    wrapper.removeChild(popup);
  }
}

//Element with a single label and text input.
class PopupInputElement extends PopupElement {
  constructor(title, description, tag, label) {
    super(title, description, tag);
    this.label = label;
  }
  activate(input) {
    let obj = super.activate();
    let label = document.createElement("p");
    label.textContent = this.label;
    obj.popupForm.appendChild(label);
    obj.popupForm.insertBefore(label, obj.popupForm.childNodes[0]);
    let textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    obj.popupForm.appendChild(textInput);
    obj.popupForm.insertBefore(textInput, obj.popupForm.childNodes[1]);
    textInput.focus();
    let form = obj.popupForm;
    form.addEventListener("submit", event => {
      if (event.preventDefault) event.preventDefault();
      let attribute = textInput.value;
      let selected = getSelectedText(textarea);
      let output;
      if (attribute.trim() != "") {
        //if the input box is not empty
        output = `${selected.before}[${this.tag}=${attribute}]${selected.centre}[/${this.tag}]${selected.after}`;
      } else {
        output = `${selected.before}[${this.tag}]${selected.centre}[/${this.tag}]${selected.after}`;
      }
      textarea.value = output;
      super.close();
    });
  }
}

//Element with a single label and colour input.
class PopupColourElement extends PopupElement {
  constructor(title, description, tag, label) {
    super(title, description, tag);
    this.label = label;
  }
  activate(input) {
    let obj = super.activate();
    let label = document.createElement("p");
    label.textContent = this.label;
    obj.popupForm.appendChild(label);
    obj.popupForm.insertBefore(label, obj.popupForm.childNodes[0]);
    let colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    obj.popupForm.appendChild(colorInput);
    obj.popupForm.insertBefore(colorInput, obj.popupForm.childNodes[1]);
    colorInput.focus();
    obj.popupForm.addEventListener("submit", event => {
      if (event.preventDefault) event.preventDefault();
      let attribute = colorInput.value;
      let selected = getSelectedText(textarea);
      let output;
      if (attribute.trim() != "") {
        //if the input box is not empty
        output = `${selected.before}[${this.tag}=${attribute}]${selected.centre}[/${this.tag}]${selected.after}`;
      } else {
        output = `${selected.before}[${this.tag}]${selected.centre}[/${this.tag}]${selected.after}`;
      }
      textarea.value = output;
      super.close();
    });
  }
}
class PopupComboElement extends PopupElement {
  constructor(title, description, tag, label, options) {
    super(title, description, tag);
    this.label = label;
    this.options = options;
  }
  activate(input) {
    let obj = super.activate();
    let label = document.createElement("p");
    label.textContent = this.label;
    obj.popupForm.appendChild(label);
    obj.popupForm.insertBefore(label, obj.popupForm.childNodes[0]);
    let select = document.createElement("select");
    obj.popupForm.appendChild(select);
    obj.popupForm.insertBefore(select, obj.popupForm.childNodes[1]);
    for (let element of this.options) {
      console.log(element);
      let option = document.createElement("option");
      option.textContent = element;
      option.setAttribute("type", element);
      select.appendChild(option);
    }
    obj.popupForm.addEventListener("submit", event => {
      if (event.preventDefault) event.preventDefault();
      let attribute = select.options[select.selectedIndex].value;
      let selected = getSelectedText(textarea);
      let output = `${selected.before}[${this.tag}=${attribute}]${selected.centre}[/${this.tag}]`;
      textarea.value = output;
      super.close();
    });
  }
}

//Append element to the toolbar
function addElementToToolbar(element) {
  let para = document.createElement("div");
  para.classList.add("toolbar-button");
  para.textContent = element.title;
  document.querySelector(".toolbar").appendChild(para);
  para.addEventListener("click", () => {
    element.activate(textarea);
  });
}

// function addSeparator() {
//   let para = document.createElement("div");
//   para.classList.add("toolbar-separator");
//   para.textContent = "|";
//   document.querySelector(".toolbar").appendChild(para);
// }

//Get selected text and return everything before it, inside, and after.
function getSelectedText(input) {
  let start = input.selectionStart;
  let end = input.selectionEnd;
  let object = {
    before: input.value.substring(0, start),
    centre: input.value.substring(start, end),
    after: input.value.substring(end)
  };
  return object;
}

//Toolbar items
const bold = new GenericElement("", "Bold", "b");
const italic = new GenericElement("", "Italic", "i");
const underline = new GenericElement("", "Underline", "u");
const strikethrough = new GenericElement("", "Strikethrough", "s");
const url = new PopupInputElement("", "Добавить ссылку", "url", "Введите адрес:");
const quote = new GenericElement("", "Quote", "quote");

window.onload = () => {
  document.querySelector(".toolbar-button:nth-child(1)").setAttribute("title", "Жирный");
  document.querySelector(".toolbar-button:nth-child(2)").setAttribute("title", "Курсив");
  document.querySelector(".toolbar-button:nth-child(3)").setAttribute("title", "Подчеркнутый");
  document.querySelector(".toolbar-button:nth-child(4)").setAttribute("title", "Зачеркнутый");
  document.querySelector(".toolbar-button:nth-child(5)").setAttribute("title", "Ссылка");
  document.querySelector(".toolbar-button:nth-child(6)").setAttribute("title", "Цитата");
};

/* Форма ввода комментария*/


/* Автоувеличение поля ввода*/
    // var textarea2 = document.querySelector('.text-field');

    // textarea2.addEventListener('keyup', function(){
    //   if(this.scrollTop > 0){
    //     this.style.height = this.scrollHeight + "px";
    //   }
    // });
/* Автоувеличение поля ввода*/



/* Продвинутое автоувеличение поля ввода*/

// Targets all textareas with class "text-field"
let textareas = document.querySelectorAll('.text-field'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
  j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "text-field" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('text-field');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
  (function(i) {
    // Note: Use 'keyup' instead of 'input'
    // if you want older IE support
    i.addEventListener('input', function() {
      
      // Append hiddendiv to parent of textarea, so the size is correct
      i.parentNode.appendChild(hiddenDiv);
      
      // Remove this if you want the user to be able to resize it in modern browsers
      i.style.resize = 'none';
      
      // This removes scrollbars
      i.style.overflow = 'hidden';

      // Every input/change, grab the content
      content = i.value;

      // Add the same content to the hidden div
      
      // This is for old IE
      content = content.replace(/\n/g, '<br>');
      
      // The <br ..> part is for old IE
      // This also fixes the jumpy way the textarea grows if line-height isn't included
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      // Briefly make the hidden div block but invisible
      // This is in order to read the height
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';

      // Make the hidden div display:none again
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}

/* Продвинутое автоувеличение поля ввода*/

















      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   if (!element.contains(event.target)) {
      //     element.classList.remove('active');
      //   }
      // });


      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   if (!element.contains(event.target)) {
      //     element.classList.remove('active');
      //   }
      //   setTimeout(function() {
      //     element.classList.remove('active');
      //   }, 2000);
      // });



      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   setTimeout(() => {
      //     if (!element.contains(event.target)) {
      //       element.classList.remove('active');
      //     }
      //   }, 1000);
      // });
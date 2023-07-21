$(document).ready(function() {
    $('.layer__chat > .layer__chat-debates > .layer__chat-debates-tabs-body > .layer__chat-debates-tabs > .layer__chat-debates-tab').click(function() {
        $('.layer__chat > .layer__chat-debates > .layer__chat-debates-tabs-body > .layer__chat-debates-tabs > .layer__chat-debates-tab').removeClass('active');
        $(this).addClass('active');
    });
    });

$(document).ready(function() {
    $('.tab-chat').click(function() {
         $('.tab-chat').removeClass('active');
        $(this).addClass('active');
    });
    });


$(document).ready(function() {
    $(".tab-2").click(function() {
      $(".layer__chat-debates").addClass("links");
    });
    
  $(".tab-1").click(function() {
      $(".layer__chat-debates").removeClass("links");
    });
  });

  $(document).ready(function() {
    $(".tab-chat-2").click(function() {
      $(".layer__comment").addClass("piste");
  });
    
  $(".tab-chat-1").click(function() {
      $(".layer__comment").removeClass("piste");
    });
  });

  /* добавление/удаление класса при изменение ширины экрана */

  function toggleClasses() {
    if (window.innerWidth >= 701) {
      document.querySelector(".tab-chat-1").classList.add("active");
      document.querySelector(".layer__comment").classList.remove("piste");
      document.querySelector(".tab-chat-2").classList.remove("active");
    }
  }
  
  window.addEventListener("resize", toggleClasses);
/* добавление/удаление класса при изменение ширины экрана */

/* Скролл блока вниз*/
$(document).ready(function() {
    $(".layer__chat-debates-table").scrollTop($(".layer__chat-debates-table").prop("scrollHeight") - $(".layer__chat-debates-table").height());
    });
/* Скролл блока вниз*/




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
// const quote = new GenericElement("", "Quote", "quote");

window.onload = () => {
  document.querySelector(".toolbar-button:nth-child(1)").setAttribute("title", "Жирный");
  document.querySelector(".toolbar-button:nth-child(2)").setAttribute("title", "Курсив");
  document.querySelector(".toolbar-button:nth-child(3)").setAttribute("title", "Подчеркнутый");
  document.querySelector(".toolbar-button:nth-child(4)").setAttribute("title", "Зачеркнутый");
  document.querySelector(".toolbar-button:nth-child(5)").setAttribute("title", "Ссылка");
  // document.querySelector(".toolbar-button:nth-child(6)").setAttribute("title", "Цитата");
};

/* Форма ввода комментария*/






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


/*Добавление/удаление класса при достижении конца скролла*/

$('.toolbar-content').scroll(function() {
  var width = $('.toolbar-content').scrollLeft();
  if (this.scrollWidth - this.scrollLeft === this.clientWidth) {
  $('.toolbar-list').addClass('hide');
  } else{
  $('.toolbar-list').removeClass('hide');
  }
  });

/*Добавление/удаление класса при достижении конца скролла*/

document.querySelectorAll('.layer__chat-users-list-body-2 > .layer__chat-users-list-wrapper > .layer__chat-users-list > li > span').forEach(function(span) {
  span.addEventListener('click', function() {
    document.querySelector('.tab-chat-2').classList.remove('active');
    document.querySelector('.layer__comment').classList.remove('piste');
    document.querySelector('.tab-chat-1').classList.add('active');
  });
});
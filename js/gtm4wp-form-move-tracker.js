document.addEventListener("focusin",(function(t){const e=t&&t.target&&t.target.closest&&t.target.closest("input,select,textarea,button,meter,progress");e&&window[gtm4wp_datalayer_name].push({event:"gtm4wp.formElementEnter",inputID:e.getAttribute("id")||"(no input ID)",inputName:e.getAttribute("name")||"(no input name)",inputClass:e.getAttribute("class")||"(no input class)",formID:e.form&&e.form.getAttribute("id")||"(no form ID)",formName:e.form&&e.form.getAttribute("name")||"(no form name)",formClass:e.form&&e.form.getAttribute("class")||"(no form class)"})}),!1),document.addEventListener("focusout",(function(t){const e=t&&t.target&&t.target.closest&&t.target.closest("input,select,textarea,button,meter,progress");e&&window[gtm4wp_datalayer_name].push({event:"gtm4wp.formElementLeave",inputID:e.getAttribute("id")||"(no input ID)",inputName:e.getAttribute("name")||"(no input name)",inputClass:e.getAttribute("class")||"(no input class)",formID:e.form&&e.form.getAttribute("id")||"(no form ID)",formName:e.form&&e.form.getAttribute("name")||"(no form name)",formClass:e.form&&e.form.getAttribute("class")||"(no form class)"})}),!1);
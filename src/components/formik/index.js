import BaseCalendar from '../Calendar';
import BaseInputNumber from '../InputNumber';
import BaseInputText from '../InputText';
import BaseSelect from '../Select';
import FormikSwitch from './FormikSwitch';
import { formikWrapper } from "./FormikWrapper";

const FormikCalendar = formikWrapper(BaseCalendar);
const FormikInputNumber = formikWrapper(BaseInputNumber);
const FormikInputText = formikWrapper(BaseInputText);
const FormikSelect = formikWrapper(BaseSelect);

export {
    FormikCalendar as Calendar,
    FormikInputNumber as InputNumber,
    FormikInputText as InputText,
    FormikSelect as Select,
    FormikSwitch as Switch,
};
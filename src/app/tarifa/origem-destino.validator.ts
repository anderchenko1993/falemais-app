import { AbstractControl } from "@angular/forms";

export function origemDestinoValidator(group: AbstractControl) {
  const origem = group.get('origem')?.value ?? '';
  const destino = group.get('destino')?.value ?? '';

  if(origem && destino) {
    return origem === destino ? { origemIgualDestino: true } : null;
  } else {
    return null;
  }
}

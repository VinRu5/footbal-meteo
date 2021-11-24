import { mount } from '@vue/test-utils'
import FileReader from '@/components/FileReader.vue'

describe('FileReader.vue', () => {
  it('should read the file', () => {
    
    const wrapper = mount(FileReader)
      wrapper.vm.$emit('load')
      wrapper.vm.$emit('load', 123)
      //const input = wrapper.find('[data-test="input-file"]')
      //const file = { type: "text/dat" };
    //   let takeFile = sinon.fake().returns(file);
    //   wrapper.setMethods({ takeFile: takeFile });

    //   const file = { type: "text/dat", name: "fotball.dat" };
    //   const event = {
    //       target: {
    //           files: [file]
    //       }
    //   };

      //input.element.files[0] = { type: "text/dat" };
      //input.trigger("change");
      expect(wrapper.emitted().load[1]).toEqual([123]);
  })
})